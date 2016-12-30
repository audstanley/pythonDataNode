# pythonDataNode
An application that is designed to talk to other nodes, share information, files, and can communicate securely.  It is designed for raspbian systems.

######In order to install on the raspberry pi zero|1|2|3:
```sh
cd;
mkdir uploads;
git clone https://github.com/audstanley/pythonDataNode && cd pythonDataNode;
sudo ./installNode;
npm install;
node app.js;
```

######Now you can navigate to your raspberry pi's local ip address within a browser, and you should see the application running. Example:
######192.168.1.4:3000
#####You can also gracefully shutdown the node application with Ctrl-C, and restart by rerunning node index.js


you can also visit my instructables to see more details: [Instructables](http://www.instructables.com/id/Raspberry-Pi-File-Uploader/)
