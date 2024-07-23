FROM node:16.14

RUN mkdir -p /app && chown -R node:node /app

ENV DOCKERIZE_VERSION v0.7.0

RUN apt-get install -y wget &&\
wget https://github.com/jwilder/dockerize/releases/download/v0.7.0/dockerize-linux-amd64-v0.7.0.tar.gz &&\
tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz &&\
apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

USER node

WORKDIR /app

COPY --chown=node:node package*.json ./

RUN npm install

COPY --chown=node:node src src
COPY --chown=node:node .editorconfig .
COPY --chown=node:node .eslintignore .
COPY --chown=node:node .eslintrc.json .
COPY --chown=node:node .sequelizerc .
COPY --chown=node:node tsconfig.json .


