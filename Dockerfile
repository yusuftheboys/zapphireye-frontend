FROM node:latest
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 4321
RUN npm run build
RUN npm install -g serve
ENTRYPOINT [ "serve", "-s", "build" ]
HEALTHCHECK --interval=5s --timeout=3s \
CMD curl -f http://localhost:8080/ || exit 1
