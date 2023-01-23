FROM node:lts-slim
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app
COPY package-lock.json /app
#RUN npm install
#RUN npm install react-scripts@latest -g --silent
COPY . /app

CMD [ "npm", "start" ]
