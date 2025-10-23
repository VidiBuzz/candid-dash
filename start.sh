#!/bin/sh
sed -i "s/listen 80/listen $PORT/g" /etc/nginx/conf.d/default.conf
nginx -g 'daemon off;'