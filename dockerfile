ARG NODE_VERSION=10

FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json .
COPY package-lock.json  .

RUN npm install --silent &&\
  npm install react-scripts -g --silent

COPY .  .

EXPOSE 3000

CMD ["npm", "start"]
