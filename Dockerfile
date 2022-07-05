FROM node:latest
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run build
RUN npm install -g serve
ENTRYPOINT [ "serve", "-s", "build" ]