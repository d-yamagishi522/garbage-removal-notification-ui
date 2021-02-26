# yarn run build (= nuxt build) 時にのみ必要なビルド変数
ARG FIREBASE_API_KEY
ARG FIREBASE_AUTH_DOMAIN
ARG FIREBASE_URL
ARG FIREBASE_PROJECT_ID
ARG FIREBASE_STRAGE_BUCKET
ARG FIREBASE_MESSAGING_SENDER_ID
ARG FIREBASE_APP_ID
ARG FIREBASE_MEASUREMENT_ID
ARG LIFF_ID

ENV HOST 0.0.0.0
ENV PORT 5000

# インストール
RUN yarn install && yarn run build

# 起動
EXPOSE 5000
ENTRYPOINT yarn run start