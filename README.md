# ゴミ出し通知bot管理画面

## 概要

リンク: https://grn-line.herokuapp.com/

毎朝通知する内容を設定する管理アプリケーション

## 開発環境

1. `mkcert localhost`で証明書を発行
2. 以下の内容を`nuxt.config.ts`に追記
3. `https://localhost:3000`で開発を行う

```
server: {
   https: {
     key: fs.readFileSync(path.resolve(__dirname, 'localhost-key.pem')),
     cert: fs.readFileSync(path.resolve(__dirname, 'localhost.pem'))
   }
 }
 ```
