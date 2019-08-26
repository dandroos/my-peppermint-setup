#!/bin/bash
isRunning=$(pgrep -f sleep-timer)
if [ -n "$isRunning" ];
then
    echo Timer on
else
    echo Timer off
fi