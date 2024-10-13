FROM node:18
WORKDIR /
COPY package*.json .
RUN npm install 
COPY app.js .
CMD [ "node","app.js" ]

