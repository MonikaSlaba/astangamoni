#! /usr/bin/bash
name=$(date +"Nepojmenovaná změna %d.%m.%y %H:%M:%S")
/usr/bin/konsole --hold -e "sh -c \"git add -A && git commit -am \\\"$name\\\"; git fetch && git rebase && git push origin main && echo hotovo\""
