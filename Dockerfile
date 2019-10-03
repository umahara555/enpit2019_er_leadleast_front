FROM "node:12.10.0-alpine"

ENV LANG C.UTF-8
ENV APP_HOME /app

WORKDIR $APP_HOME

COPY package.json $APP_HOME/package.json

RUN npm install

COPY . $APP_HOME

CMD ["npm", "start"]
