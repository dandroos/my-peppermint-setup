#!/bin/bash
status=$(grep mode ~/.xscreensaver | sed s/mode:[[:space:]]*//)

if [[ $status == off ]];
then
    cd ~/bin
    ~/.config/versions/node/v8.16.0/bin/node setScreensaverMode.js blank
else
    cd ~/bin
    ~/.config/versions/node/v8.16.0/bin/node setScreensaverMode.js off
fi

killall xscreensaver
xscreensaver &
