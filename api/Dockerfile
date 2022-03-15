FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
RUN npm install mysql@2.18.1 --save
# CMD pwd
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
CMD cat package.json

EXPOSE 1337

CMD ["npm", "run", "develop"]
