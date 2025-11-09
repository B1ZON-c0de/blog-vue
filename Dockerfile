FROM node:24

RUN npm install -g pnpm

WORKDIR /usr/src/app

COPY . .

WORKDIR /usr/src/app/frontend

RUN pnpm install
RUN pnpm run build

WORKDIR /usr/src/app/backend

RUN npm install

EXPOSE 3002

CMD ["node", "app.js"]
