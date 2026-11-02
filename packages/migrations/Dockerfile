# Check out https://hub.docker.com/_/node to select a new base image
FROM node:24.22.1-alpine

# Bundle app source code
COPY . ./migrations

# Setting working dir
WORKDIR /migrations

# Install app dependencies
#RUN npm i npm-run-all
RUN npm install