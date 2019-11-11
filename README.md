# LeadLeast

## エレベーターピッチ

オンラインで学習しながらプロダクトデザインしたい、
enPiT受講中の生徒向けの、
LeadLeastというプロダクトは、
プロダクトダクトデザイン学習支援サービスです。
これは、ブラウザ上でリーンキャンパスやユーザーストーリマップを作る事ができ、
GuildHubや他のプロダクトデザインツールとは違い、
学びながら作る事ができ、また、実際の付箋を使っているような感覚で使う事ができます。

## リポジトリ

- [フロントエンド](https://github.com/umahara555/enpit2019_er_leadleast_front)
- [バックエンド](https://github.com/umahara555/enpit2019_er_leadleast_api)

## セットアップ

#### GitHubから取ってくる

```
$ git clone https://github.com/umahara555/enpit2019_er_leadleast_front.git
$ cd enpit2019_er_leadleast_front
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

