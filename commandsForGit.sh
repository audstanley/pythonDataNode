# This is just few git commands to have on file for if/when you get stuck.
# All of these commands, you will run inside the project folder AFTER you've cloned the
# project.  This is for the command line (obvioulsly), and will work on every OS platform.
# You will need to do this manually on your pi in order to get updates, and run/test
# them.  You CAN write most of your tests on a laptop, push the changes, then pull on to
# your pi for the easiest way to test your updates/changes.



# you only need to do a git clone ONCE to copy the project with all it's stuff inside
# the project folder so far.
git clone https://github.com/audstanley/pythonDataNode;





# 1. Always pull new changes(from github) before you commit your changes to the web.
# it's good to get into the practice of addeding/pulling/commiting/pushing as often 
# as you normally save your file.
git pull;




# 2. add the file(s) that you made changes to and WANT to push up to the devolopment branch
# NEVER git add node_modules/
# node_modules is a folder that holds all of the modules that node uses.  This does NOT need
# to be published on github.
git add someFileName.txt someOtherFile.txt somethingElse.txt



# 3. With git installed on your system you need to "commit" your added files to git.
# This is a little confusing because you have a LOCAL repository (when you installed git), 
# and there is also a REMOTE repository (github).  Before you can PUSH to the REMOTE repo,
# you have to commit your local changes.
git commit;
# right after you run git commit, a text document will appear with comments at the bottom 
# of the page.  In the comment section you'll see the files that you have added and the files
# that will also be ignored. Make sure you type SOMETHING, like: "I added someFile.txt, and changed
# whatever in the index.js file."



# 4. git push origin will push the project up to github.  The comments you made will be on github
# and you can see the progress of the project in slack under the #gitlisten channel
git push origin;

