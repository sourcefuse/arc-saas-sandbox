# Check out https://hub.docker.com/_/node to select a new base image
FROM node:20-alpine

# Bundle app source code
COPY . ./migrations

# Setting working dir
WORKDIR /migrations

# Install app dependencies
#RUN npm i npm-run-all
RUN npm install --ignore-scripts