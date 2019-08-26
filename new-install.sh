#!/bin/bash

echo Are you ready to rock? \(Type \'yes\' to install EVERYTHING!\)
read response

if [ $response == yes ];
then 
    wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
    nvm install 8.16.0
    sudo apt -y install git
    git config --global user.name "dandroos"
    git config --global user.email "dandrewsuk82@gmail.com"
    git clone https://github.com/dandroos/openbox-settings.git
    cd openbox-settings
    node setup
    echo All done! Reboot and you\'re ready to roll! \(Hit ENTER to reboot\)
    read -p
    sudo reboot
else
    echo No problem!
fi