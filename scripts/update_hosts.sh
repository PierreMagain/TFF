#!/bin/bash

# Arguments: IP_ADDRESS NAME
IP_ADDRESS=${VM1_IP}
NAME="master"

# Fichier hosts
HOSTS_FILE="/etc/hosts"

# Supprimer toutes les anciennes entrées avec le même nom d'hôte
sudo sed -i "/ $NAME$/d" $HOSTS_FILE

# Ajouter la nouvelle entrée
echo "$IP_ADDRESS $NAME" | sudo tee -a $HOSTS_FILE
