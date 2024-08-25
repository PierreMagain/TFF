#!/bin/bash

# Arguments: IP_ADDRESS NAME
IP_ADDRESS=${VM1_IP}
VM1_NAME=${VM1_NAME}

# Fichier hosts
HOSTS_FILE="/etc/hosts"

# Supprimer toutes les anciennes entrées avec le même nom d'hôte
sudo sed -i "/ $VM1_NAME$/d" $HOSTS_FILE

# Ajouter la nouvelle entrée
echo "$IP_ADDRESS $VM1_NAME" | sudo tee -a $HOSTS_FILE
