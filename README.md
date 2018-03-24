# DockerNodeVSCode

> This is an example of how to use Docker to run and debug your Node.js apps in VSCode. If you have Docker installed with the VSCode Docker extension you are on your way to container deployment land for your node.js apps. :)

I'll give you a very sweet and short breakdown of how to get this working. :)

![docker logo](http://www.unixstickers.com/image/data/stickers/docker/Docker-logo-and-type.sh.png)
## 1. Install Docker for Windows
I'm using VSCode for Windows and use Windows 10 Professional so I've installed docker and switched docker to use linux containers which uses Hyper-V to spin up a small linux container which is used to deploy the Docker containers.

Here is the link to [Install Docker for Windows](https://docs.docker.com/docker-for-windows/install/)

## 2. Create an Docker account and login
Pretty self  explanatory but you basically need a docker account to connect to docker hub.  You'll get why as you go...

## 3. Install Docker extension 
Open up VSCode, click on extensions and search for Docker.  The first result should be the one you looking for.  Here's the  [GIT REPO](https://github.com/microsoft/vscode-docker.git)


## 4. Give it a Spin
Open the command pallet and run **> Docker: Compose Up**

SO there you have it!  A very brief quick run through to get this app running from inside a docker container in VSCode ;)

If you stuck let me know and I'll see if I can help...... ;)
