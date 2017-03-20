FROM node:7.7.0

# Global install yarn package manager
RUN apt-get update && apt-get install -y curl apt-transport-https && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install -y yarn

WORKDIR /code
COPY package.json ./

RUN yarn && npm install
VOLUME /code/node_modules

COPY . ./

EXPOSE 8080

CMD ["npm", "run", "dev"]
