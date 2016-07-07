#!/bin/bash

echo "Installing NVM ..."
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash

echo "Installing node.js v4.4.7"
[ -s ~/.nvm/nvm.sh ] && . ~/.nvm/nvm.sh
nvm install 4.4.7

echo "Reloading bashrc ..."
source ~/.bashrc

echo "Installing Yeoman and his dependencies ..."
npm install -g grunt-cli bower yo generator-karma generator-angular

echo "Cloning git repository ..."
git clone https://github.com/oda-ipssi/angular-oda-challenge

cd ./angular-oda-challenge

echo "Installing dependencies ... "
npm install
bower install

grunt serve
