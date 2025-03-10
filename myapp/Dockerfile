FROM node:18

ENV NODE_ENV=production \
    APP_HOME=/usr/src/app

RUN useradd -m appuser

WORKDIR $APP_HOME

COPY package*.json ./

RUN npm install

COPY . .

RUN chown -R appuser:appuser $APP_HOME

USER appuser

EXPOSE 3001

CMD ["npm", "start"]
