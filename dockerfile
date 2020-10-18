FROM node:12

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

COPY . .

VOLUME [ "/etc/letsencrypt/live/hardsof.com" ]

EXPOSE 443

CMD ["npm", "start"]