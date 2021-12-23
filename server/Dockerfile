FROM node:14-slim

RUN mkdir app
WORKDIR /app

# COPY ./package*.json ./
COPY . /app

RUN npm install

# RUN useradd -ms /bin/bash sadman
# USER sadman

# CMD ["npm", "run", "dev:unx"]
