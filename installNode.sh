#!/bin/bash

if [ "$EUID" -ne 0 ]
        then echo "You need to install as root by using sudo ./installNode";
        exit
else cd ~/ && mkdir temp && cd temp && wget https://nodejs.org/dist/latest-v7.x/node-v7.2.1-linux-armv7l.tar.gz;
tar -xzf node-v7.2.1-linux-armv7l.tar.gz;
#Remove the tar after extracing it.
sudo rm node-v7.2.1-linux-armv7l.tar.gz;
#This next line will copy Node over to the appropriate folder.
sudo mv node-v7.2.1-linux-armv7l/ /opt/nodejs/;
#This line will remove the nodeJs we downloaded.
sudo rm -R node-v7.2.1-linux-armv7l.tar.gz/* && sudo rmdir node-v7.2.1-linux-armv7l.tar.gz/;
#Create symlinks to node && npm
sudo ln -s /opt/nodejs/bin/node /usr/bin/node;
sudo ln -s /opt/nodejs/bin/node /usr/sbin/node;
sudo ln -s /opt/nodejs/bin/node /sbin/node;
sudo ln -s /opt/nodejs/bin/node /usr/local/bin/node;
sudo ln -s /opt/nodejs/bin/npm /usr/bin/npm;
sudo ln -s /opt/nodejs/bin/npm /usr/sbin/npm;
sudo ln -s /opt/nodejs/bin/npm /sbin/npm;
sudo ln -s /opt/nodejs/bin/npm /usr/local/bin/npm;
fi
