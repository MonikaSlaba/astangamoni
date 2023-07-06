#! /usr/bin/bash
name=date +"Nepojmenovaná změna %d.%m.%y %H:%M:%S"
/usr/bin/konsole --hold -e "git commit -am \"$name\" && git push origin main"
