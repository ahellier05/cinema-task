#base image we will use
from node:16

#make a new working directory in the container
WORKDIR /ui

#copy all contents across to the container
COPY /package*.json ./

#install dependencies
RUN npm i

#copy the source code across now
COPY . .

#expose the port
EXPOSE 3000

#command to run the application
CMD [ "npm", "start" ]
