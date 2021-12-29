FROM node:8.16-alpine

ARG NODE_HOME
WORKDIR /${NODE_HOME}

COPY package-lock.json /${NODE_HOME}/package-lock.json
COPY package.json /${NODE_HOME}/package.json
COPY yarn.lock /${NODE_HOME}/yarn.lock

RUN yarn install

CMD /bin/sh
