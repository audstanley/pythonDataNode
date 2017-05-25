# pythonDataNode
A nodejs file upload web application for the raspberry pi. This includes an installation script to install the latest version of NodeJs on any type of raspberry pi.

###### In order to install on the raspberry pi zero|1|2|3:
```sh
cd;
git clone https://github.com/audstanley/pythonDataNode && cd pythonDataNode;
mkdir uploads;
sudo ./installNode;
npm install;
node app.js;
```

###### Now you can navigate to your raspberry pi's local ip address within a browser, and you should see the application running. Example:
###### 192.168.1.4:3000
##### You can also gracefully shutdown the node application with Ctrl-C, and restart by rerunning node index.js


you can also visit my instructables to see more details: [Instructables](http://www.instructables.com/id/Raspberry-Pi-File-Uploader/)

This was also published on lifeHacker: [lifeHacker](http://lifehacker.com/make-your-own-file-uploader-to-add-files-to-a-raspberry-1790554165)

As well as Dataplicity Announcements page: [dataplicity](http://docs.dataplicity.com/blog/lifehacker-india)

Feel free to check out my blog: [audstanley.com](http:www.audstanley.com)
