FROM node:18 As builder

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build

FROM node:18-slim

ENV NODE_ENV=production \
    APP_HOME=/usr/src/app

WORKDIR $APP_HOME

COPY --from=builder /app .

RUN useradd -m appuser

RUN chown -R appuser:appuser $APP_HOME

EXPOSE 3000

CMD ["node", "app.js"]


