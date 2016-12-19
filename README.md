# pythonDataNode
An application that is designed to talk to other nodes, share information, files, and can communicate securely.  It is designed for raspbian systems.

######In order to install on the raspberry pi 2/3:
Log onto your pi's command line, and navigate to you home directory:
```sh
cd;
```

Then clone the repository & naviagte into the directory:
```sh
git clone https://github.com/audstanley/pythonDataNode && cd pythonDataNode;
```

Then install NodeJs if you don't have node installed on your pi:
```sh
sudo ./installNode;
```

Now install the dependencies of the application with npm:
```sh
npm install;
```

Launch with:
```sh
node index.js;
```

######Now you can navigate to your raspberry pi's local ip address within
######a browser, and you should see the application running. Example:
######192.168.1.4:3000


Richard Stanley:
  This is my first commit on the project within Atom.
