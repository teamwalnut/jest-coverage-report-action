FROM node:15

COPY dist/index.js /index.js

ENTRYPOINT ["node", "/index.js"]