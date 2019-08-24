#!/usr/bin/env python3
import subprocess
import time

add_command = "xrandr --output HDMI-2 --right-of eDP-1 && killall conky && conky -b &"
remove_command = "xrandr --auto && killall conky && conky -b &"

while True:
    time.sleep(5)
    try:
        subprocess.Popen(["xrandr"])
    except:
        pass
    else:
        break

def get(cmd):
    return subprocess.check_output(cmd).decode("utf-8")

def count_screens(xr):
    return xr.count(" connected ")

def run_command(cmd):
    subprocess.Popen(["/bin/bash", "-c", cmd])

run_command("conky &")
xr1 = None

while True:
    time.sleep(5)
    xr2 = count_screens(get(["xrandr"]))
    if xr2 != xr1:
        if xr2 > 1:
            run_command(add_command)
        else:
            run_command(remove_command)
    xr1 = xr2
