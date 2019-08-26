#!/bin/bash

CURRENT=$(grep mode ~/.xscreensaver | sed s/mode:[[:space:]]*//)

if [ $CURRENT == off ];
then
    echo XS Disabled
else
    echo XS Enabled
fi
