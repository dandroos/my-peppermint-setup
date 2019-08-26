#!/bin/bash

echo Are you ready to rock? \(Type \'yes\' to begin!\)
read response

if [ $response == yes ];
then 
    wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
    nvm install 8.16.0
    sudo apt -y install git
    git config --global user.name "dandroos"
    git config --global user.email "dandrewsuk82@gmail.com"
    git clone https://github.com/dandroos/my-peppermint-setup.git
    cd my-peppermint-setup
    ~/.config/versions/node/v8.16.0/bin/node setup
    echo All done! Reboot and you\'re ready to roll! \(Hit ENTER to reboot\)
    read -p
    sudo reboot
else
    echo No problem!
fi