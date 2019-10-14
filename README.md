# LeadLeast

## エレベーターピッチ

オンラインでアジャイルなプロダクトデザインしたい，  
教育関係者（生徒，教員）向けの,  
アジャイルなプロダクトデザイン支援を実現する，  
LeadLeastというサービスです．  
これは，オンラインでリーンキャンパスやユーザーストーリマップが共同編集ができ，  
Googleスプレッドシートやオンラインホワイトボードとは違い，  
フォーマットが統一でき，初学者でも一連の流れを体系的にデザインできる.  

## リポジトリ

- [フロントエンド](https://github.com/umahara555/enpit2019_er_leadleast_front)
- [バックエンド](https://github.com/umahara555/enpit2019_er_leadleast_api)

## セットアップ

#### GitHubから取ってくる

```
$ git clone https://github.com/umahara555/enpit2019_er_leadleast_front.git
$ cd enpit2019_er_front
$ cp .env.sample .env
```

#### モジュール取ってくる

```
$ docker-compose run --rm front npm install
```

#### ビルド
```
$ docker-compose build
```

#### 起動
```
$ docker-compose up -d
```

１分前後待った後、ブラウザで`localhost:3000`にアクセスできるはず

## 使い方

```
# ライブラリ等の追加や更新があった時
$ docker-compose build

# 起動
$ docker-compose up -d

# 終了
docker-compose down
```

