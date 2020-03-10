#!/bin/bash

for i in *.mp4;
do  ffmpeg -i "$i" -vf scale=960:540 -an -y "./a/$i"
done
