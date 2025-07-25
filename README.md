* ## React + Vite

# 天気マルチアプリ React の URL は下記です。
<br>
  https://masatuber-weather-app3.netlify.app/
<br> 

# 【Web アプリの主力機能】
 世界と日本の天気検索、タスク管理、カレンダー、パスワード生成、ジェミニカスタム App を web 機能として開発、SNSシェアボタン実装しました。
 <br>
  テストコード(vitest)導入しました。Routerコンポーネントのレンダリング表示テスト実施
<br>

# 「天気マルチアプリのこだわり点」
<br>
ハンバーガーメニューの色、動きは円を描きながら、弾けるような動きを採用しました。パソコン上には時間は表示されますが、アプリ UI の中心にリアルタイムで時間を確認したいと思い実装しました。<br>

# 【開発目的】
<br>
天気マルチアプリは一度開発したら終了ではなく、フィードバックや自分が使う時に不便がないように育てる方針で作成しました。<br> 

# 【将来追加機能】
<br>

近年 DX 化が課題として上がるようになった背景で、Python 自動化プログラムを無償で提供し続けること、私自身パスワード生成する時に第三者提供のアプリではなく、自分で管理をしたいと思いました。<br>
Python 自動化プログラムを exe ファイルに変換しダウンロード共有が可能です。ファーストビューの表示速度改善しました。<br>
音楽ながら SNS を公開しました。フルスタックアプリです。<br>
<br>

# 【ジェミニカスタム App の目的】
<br>

* ジェミニカスタム App のソースコード<br>
  https://github.com/masatuber/gemini-bot.git<br>
UI、ダークモード切替、生成された回答のコピーのし易さ、ログインなしで手軽に使用出来ると思い作成しました。<br>

# 【音楽ながら SNS の目的】
<br>
自作の SNS を構築した段階では news API を使用し常に情報収集が可能で、news について語って欲しいと思いました。<br>
しかしながら、news API は無料では本番環境に移行出来ずにいました。<br>

* 音楽ながら SNS のソースコードフロントエンド側<br>
  https://github.com/masatuber/my-sns-front-end.git<br>

* 音楽ながら SNS のソースコードバックエンド側<br>
  https://github.com/masatuber/my-sns-backend.git<br>

## 【将来追加予定機能】
<br>
Spotify の API では無料枠でも使用出来ると調査で判明したので今後は実装したいと思います。<br>
ユーザーが好きな音楽の歌詞や曲名を検索しながら、ポストできると面白い試みだと感じています。<br>
（音楽ながら SNS の苦労した点）バックエンド側とフロントエンドを繋げる時に、バックエンド側から undefined が帰ってきて、ポストマンで確認した時と相違があり苦労しました。<br>

# 【Python 自動化スクリプト配布の目的】
<br>

* Python 自動化スクリプト Web API のソースコード<br>
  https://github.com/masatuber/node-exe-api.git<br>

* Python 自動化スクリプトのソースコード<br>
  https://github.com/masatuber/PythonAutoExcel.git<br>
Web アプリを通して DX を推進する目的があります。

# 【プログラミング言語選定理由】
<br>
Meta 社が開発している、部品ごとにコンポーネントとして分ける設計手法のため、管理がし易い、create-react-app は公式に非推奨となったため、ビルドツールは vite に移行しています。<br>

##  【eslint について】
<br>
propTypes に関連する警告が厳しすぎることや、タイプスクリプトに移行した方が早いと感じました。　そのため設定を無効で開発を進めています。<br>

# 【技術と品質管理の改善予定について】
<br>

Vitest 導入済み、今後はカバー率を上げる予定
<br>

# 【プロジェクトフォルダ階層】
<br>

```
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
<br>

# 【インストール】セットアップ手順とライブラリをまとめ
<br>

* 任意のフォルダにて下記コマンドを使用する。
<br>
npm create vite@latest<br>
npm install<br>

* 次に必要なライブラリをインストールしています。
<br>
npm install react-burger-menu --save<br>
npm install react-router-dom<br>
npm install xlsx file-saver<br>
npm install @mui/material @emotion/react @emotion/styled<br>
npm install @mui/icons-material<br>
npm install --save randomatic<br>
npm install localforage<br>
npm install --save react-modal<br>
npm install uuid<br>
npm install react-share<br>

* 開発用サーバー起動
npm run dev<br>

* ビルド方法
<br>
npm run build

