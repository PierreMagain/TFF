provider "azurerm" {
  features {}

  subscription_id = "d59a343a-4f98-492f-974a-7aab5defa573"
}

terraform {
  backend "local" {
    path = "./terraform.tfstate"
  }
}

module "resource_group" {
  source              = "./modules/azure_resource_group_name"
  resource_group_name = "ClusterK8S"
  location            = "Germany West Central"
}

module "network" {
  source              = "./modules/azure_resource_network"
  resource_group_name = module.resource_group.resource_group_name
  location            = module.resource_group.resource_group_location
  address_space       = ["192.168.0.0/16"]
  subnet_prefix       = ["192.168.0.0/24"]
}

module "vm1" {
  source              = "./modules/azure_resource_vm_ubuntu"
  resource_group_name = module.resource_group.resource_group_name
  location            = module.resource_group.resource_group_location
  vnet_name           = module.network.vnet_name
  subnet_name         = module.network.subnet_name
  subnet_id           = module.network.subnet_id
  vm_name             = "master"
  vm_size             = "Standard_B2s"
}

module "vm2" {
  source              = "./modules/azure_resource_vm_ubuntu"
  resource_group_name = module.resource_group.resource_group_name
  location            = module.resource_group.resource_group_location
  vnet_name           = module.network.vnet_name
  subnet_name         = module.network.subnet_name
  subnet_id           = module.network.subnet_id
  vm_name             = "node1"
  vm_size             = "Standard_B2s"
}

resource "null_resource" "update_known_hosts" {
  
  depends_on = [
    module.vm1,
    module.vm2
  ]
   provisioner "local-exec" {
    command = <<EOT
      sleep 30
      export VM1_IP=${module.vm1.public_ip_address}
      export VM2_IP=${module.vm2.public_ip_address}
      ${path.module}/scripts/add_known_hosts.sh
    EOT
  }
}


resource "local_file" "ansible_inventory" {
  depends_on = [null_resource.update_known_hosts]
  
  content = templatefile("${path.module}/inventory.tpl", {
    vm1_name  = module.vm1.vm_name,
    vm1_ip    = module.vm1.public_ip_address,
    vm1_user  = module.vm1.admin_username,
    vm2_name  = module.vm2.vm_name,
    vm2_ip    = module.vm2.public_ip_address,
    vm2_user  = module.vm2.admin_username
  })
  filename = "${path.module}/inventory.ini"
}


resource "null_resource" "ansible_provision" {
  depends_on = [local_file.ansible_inventory]

  provisioner "local-exec" {
    command = "ansible-playbook -i ${path.module}/inventory.ini ${path.module}/playbook.yml"
  }
}