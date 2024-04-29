FROM node:16.20.2
WORKDIR app
COPY . .
COPY package*.json ./
RUN npm install
EXPOSE 3030
# CMD ["node", "index.js"]

CMD ["npm", "start"]