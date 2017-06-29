FROM node:alpine
RUN mkdir -p /usr/src/app && chown node.node /usr/src/app
USER node
ADD . /usr/src/app
WORKDIR /usr/src/app
RUN yarn install
EXPOSE 3000
VOLUME ["/usr/src/app"]
CMD ["node", "dist"]