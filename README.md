##### React + Vite

# 天気マルチアプリ React の URL は下記です

  <https://masatuber-weather-app3.netlify.app/>

# 【Web アプリの主力機能】

 世界と日本の天気検索、タスク管理、カレンダー、パスワード生成、ジェミニカスタム App を web 機能として開発、SNSシェアボタン実装しました。

  テストコード(vitest)導入しました。Routerコンポーネントのレンダリング表示テスト実施

# デザイン変更

天気検索のボタンを丸いデザインと緑を採用しました。

# 「天気マルチアプリのこだわり点」

ハンバーガーメニューの色、動きは円を描きながら、弾けるような動きを採用しました。パソコン上には時間は表示されますが、アプリ UI の中心にリアルタイムで時間を確認したいと思い実装しました。

# 【開発目的】

天気マルチアプリは一度開発したら終了ではなく、フィードバックや自分が使う時に不便がないように育てる方針で作成しました。

# 【将来追加機能】

近年 DX 化が課題として上がるようになった背景で、Python 自動化プログラムを無償で提供し続けること、私自身パスワード生成する時に第三者提供のアプリではなく、自分で管理をしたいと思いました。

Python 自動化プログラムを exe ファイルに変換しダウンロード共有が可能です。ファーストビューの表示速度改善しました。

音楽ながら SNS を公開しました。フルスタックアプリです。

# 【ジェミニカスタム App の目的】

* ジェミニカスタム App のソースコード

  <https://github.com/masatuber/gemini-bot.git>

UI、ダークモード切替、生成された回答のコピーのし易さ、ログインなしで手軽に使用出来ると思い作成しました。

# 【音楽ながら SNS の目的】

自作の SNS を構築した段階では news API を使用し常に情報収集が可能で、news について語って欲しいと思いました。

しかしながら、news API は無料では本番環境に移行出来ずにいました。

* 音楽ながら SNS のソースコードフロントエンド側

  <https://github.com/masatuber/my-sns-front-end.git>

* 音楽ながら SNS のソースコードバックエンド側

  <https://github.com/masatuber/my-sns-backend.git>
  
## 【将来追加予定機能】

Spotify の API では無料枠でも使用出来ると調査で判明したので今後は実装したいと思います。

ユーザーが好きな音楽の歌詞や曲名を検索しながら、ポストできると面白い試みだと感じています。

（音楽ながら SNS の苦労した点）バックエンド側とフロントエンドを繋げる時に、バックエンド側から undefined が帰ってきて、ポストマンで確認した時と相違があり苦労しました。

# 【Python 自動化スクリプト配布の目的】

* Python 自動化スクリプト Web API のソースコード

  <https://github.com/masatuber/node-exe-api.git>

* Python 自動化スクリプトのソースコード
  <https://github.com/masatuber/PythonAutoExcel.git>

Web アプリを通して DX を推進する目的があります。

# 【プログラミング言語選定理由】

Meta 社が開発している、部品ごとにコンポーネントとして分ける設計手法のため、管理がし易い、create-react-app は公式に非推奨となったため、ビルドツールは vite に移行しています。

## 【eslint について】

propTypes に関連する警告が厳しすぎることや、タイプスクリプトに移行した方が早いと感じました。　そのため設定を無効で開発を進めています。

# 【技術と品質管理の改善予定について】

Vitest 導入済み、今後はカバー率を上げる予定

# 【プロジェクトフォルダ階層】

```txt
app3-vite
  ├─dist
  ├─node_modules
  ├─public
  │     │──background-image.jpg
  │     │── background-image2.jpg
  │     │── background-image3.jpg
  │     │──favicon.ico
  │     │──manifest.json
  │     │──robots.txt
  │     │──sitemap.xml
  │     └─_redirects
  │
  └─src
    │ │──App.css
    │ │── App.jsx
    │ │──Calendar.css
    │ │──HamburgerMenu.css
    │ └─main.jsx
    │  
    └─components
      │  │──CalendarApp.jsx
      │  │──DigitalDateTime.jsx
      │  │──Inquiry.jsx
      │  │──not_found.jsx
      │  │──PasswordGenerator.jsx
      │  │──PythonDlPage.jsx
      │  │
      │  ├─counter
      │  │   │──visitorCounter.css
      │  │   └─VisitorCounter.jsx
      │  │   
      │  │──shareSns
      │  │   │──ShareButtonList.css
      │  │   └─ShareButtonList.jsx
      │  │
      │  ├─japanWeather
      │  │      ├─japanWeather.css
      │  │      └─JapanWeather.jsx
      │  │
      │  ├─todo
      │  │    ├─Todo.jsx
      │  │    ├─todoApps.css
      │  │    ├─TodoApps.jsx
      │  │    └─TodoList.jsx
      │  │
      │  └─weather
      │          ├─Form.jsx
      │          ├─home.jsx
      │          ├─Loading.jsx
      │          ├─Results.jsx
      │          └─Title.jsx
      │
      └─test
          └─components
                    ├─weather.test.jsx
                    
```

# 【インストール】セットアップ手順とライブラリをまとめ

* 任意のフォルダにて下記コマンドを使用する。

```bash
npm create vite@latest
npm install
```

* 次に必要なライブラリをインストールしています。

```bash
npm install react-burger-menu --save
npm install react-router-dom
npm install xlsx file-saver
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install --save randomatic
npm install localforage
npm install --save react-modal
npm install uuid
npm install react-share
```

* 開発用サーバー起動

npm run dev

* ビルド方法

npm run build
