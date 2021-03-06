FROM node:14.4.0-alpine

COPY . .

ARG FIREBASE_API_KEY
ARG FIREBASE_AUTH_DOMAIN
ARG FIREBASE_URL
ARG FIREBASE_PROJECT_ID
ARG FIREBASE_STRAGE_BUCKET
ARG FIREBASE_MESSAGING_SENDER_ID
ARG FIREBASE_APP_ID
ARG FIREBASE_MEASUREMENT_ID
ARG LIFF_ID

ENV HOME=/web \
    LANG=C.UTF-8 \
    TZ=Asia/Tokyo \
    HOST=0.0.0.0  \
    NPM_CONFIG_PRODUCTION=false  \
    PORT=${PORT}

RUN yarn install && yarn run build

WORKDIR web
EXPOSE 3000

CMD ["yarn", "run", "start"]