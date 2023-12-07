#!/bin/bash
git pull

# Ask for user confirmation
read -p "Are you sure you want to deploy? (y/n) " -r
echo    # move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
    # If user confirmed, run the deploy command
    docker-compose up --build -d
else
    # If user did not confirm, exit the script
    echo "Deployment cancelled."
    exit 1
fi