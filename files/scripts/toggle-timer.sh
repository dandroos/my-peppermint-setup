#!/bin/bash
isRunning=$(ps aux | grep sleep-timer | grep -v grep | grep S)
if [ -z "$isRunning" ];
then
    exec ~/bin/sleep-timer.sh
else
    pid=$(pgrep -f sleep-timer)
    kill "$pid"
    # pkill sleep-timer
fi