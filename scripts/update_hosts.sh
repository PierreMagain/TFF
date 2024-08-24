#!/bin/bash

# Arguments: IP_ADDRESS NAME
IP_ADDRESS=$1
NAME=$2

# Fichier hosts
HOSTS_FILE="/etc/hosts"

# Supprimer les anciennes entrées avec le même nom
sudo sed -i "/${NAME}/d" ${HOSTS_FILE}

# Ajouter la nouvelle entrée
echo "${IP_ADDRESS} ${NAME}" | sudo tee -a ${HOSTS_FILE}
