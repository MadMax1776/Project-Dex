#!/bin/bash

# 1. install curl on your system, then run the nvm installer script
sudo apt install curl 
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash

# 2. The nvm installer script creates environment entry to login script of the current user. You can either logout and login again to load the environment or execute the below command to do the same.
source ~/.profile 

# 3. Install the latest version of node.js
nvm install node