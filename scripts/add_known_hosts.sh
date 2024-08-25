#!/bin/bash

# Lire les adresses IP depuis les variables d'environnement
VM1_IP=${VM1_IP}
VM1_NAME=${VM1_NAME}
VM2_IP=${VM2_IP}


ssh-keygen -R $VM1_NAME

# Ajouter les clés au fichier known_hosts
ssh-keyscan -H $VM1_IP >> ~/.ssh/known_hosts
ssh-keyscan -H $VM1_NAME >> ~/.ssh/known_hosts
ssh-keyscan -H $VM2_IP >> ~/.ssh/known_hosts
