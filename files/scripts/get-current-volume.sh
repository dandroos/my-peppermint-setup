#!/bin/bash

# Purpose: To return the current volume level and concatenate a percentage sign for display on tint2
DATA=$(pactl list sinks | grep '^[[:space:]]Volume:' | head -n $(( $SINK + 1 )) | tail -n 1 | sed -e 's,.* \([0-9][0-9]*\)%.*,\1,')

MUTED=$(pactl list sinks | grep 'Mute' | sed 's/Mute: //')

if [ $MUTED == yes ]
then
    echo "Muted"
elif [ $MUTED == no ]
then
    echo "$DATA%"
fi