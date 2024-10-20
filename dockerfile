FROM node:20.18
RUN apt-get update && apt-get install -y curl
RUN echo "Node: " && node -v
RUN echo "NPM: " && npm -v
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY ./ .
ENV NODE_ENV=production
RUN npm run build
CMD ["npm", "run" ,"start"]