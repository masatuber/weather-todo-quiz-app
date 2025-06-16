## React + Vite
##天気マルチアプリReactのURLは下記です。

<br>

    https://masatuber-weather-app3.netlify.app/<br>
##　【Webアプリの主力機能】天気検索、タスク管理、カレンダー、パスワード生成、ジェミニカスタムAppをweb機能として開発<br>
  表示速度改善目的でnetlify.tomlを導入しました。<br>

##　「天気マルチアプリのこだわり点」<br>
  ハンバーガーメニューの色、動きは円を描きながら、弾けるような動きを採用しました。パソコン上には時間は表示されますが、アプリUIの中心にリアルタイムで時間を確認したいと思い実装しました。<br>

##　【目的】<br>天気マルチアプリは一度開発したら終了ではなく、フィードバックや自分が使う時に不便がないように育てる方針で作成しました。<br>
##　【将来追加機能】<br>
  近年DX化が課題として上がるようになった背景で、Python自動化プログラムを無償で提供し続けること、私自身パスワード生成する時に第三者提供のアプリではなく、自分で管理をしたいと思いました。<br>
  天気検索については、日本の天気を検索出来るように機能を追加予定です。<br>
  Python自動化プログラムをexeファイルに変換しダウンロード共有が可能です。ファーストビューの表示速度改善しました。<br>
  音楽ながらSNSを公開しました。フルスタックアプリです。<br>
<br>

##　【ジェミニカスタムAppの目的】<br>
・ジェミニカスタムAppのソースコード<br>
    https://github.com/masatuber/gemini-bot.git<br>
  UI、ダークモード切替、生成された回答のコピーのし易さ、ログインなしで手軽に使用出来ると思い作成しました。<br>

##　【音楽ながらSNSの目的】<br>
  自作のSNSを構築した段階ではnews APIを使用し常に情報収集が可能で、newsについて語って欲しいと思いました。<br>
  しかしながら、news APIは無料では本番環境に移行出来ずにいました。<br>
・音楽ながらSNSのソースコードフロントエンド側<br>
    https://github.com/masatuber/my-sns-front-end.git<br>
・音楽ながらSNSのソースコードバックエンド側<br>
    https://github.com/masatuber/my-sns-backend.git<br>
##　【将来追加予定機能】<br>
  SpotifyのAPIでは無料枠でも使用出来ると調査で判明したので今後は実装したいと思います。<br>
  ユーザーが好きな音楽の歌詞や曲名を検索しながら、ポストできると面白い試みだと感じています。<br>
  （音楽ながらSNSの苦労した点）バックエンド側とフロントエンドを繋げる時に、バックエンド側からundefinedが帰ってきて、ポストマンで確認した時と相違があり苦労しました。<br>
##　【Python自動化スクリプト配布の目的】<br>
・Python自動化スクリプトWeb APIのソースコード<br>
    https://github.com/masatuber/node-exe-api.git<br>
・Python自動化スクリプトのソースコード<br>
    https://github.com/masatuber/PythonAutoExcel.git<br>
  Webアプリを通してDXを推進する目的があります。

##　【プログラミング言語選定理由】<br>
  Meta社が開発している、部品ごとにコンポーネントとして分ける設計手法のため、管理がし易い、create-react-appは公式に非推奨となったため、ビルドツールはviteに移行しています。<br>
##　【eslintについて】<br>
  propTypes に関連する警告が厳しすぎることや、タイプスクリプトに移行した方が早いと感じました。　そのため設定を無効で開発を進めています。<br>
## 【技術と品質管理の改善予定について】<br>
  フロントエンド開発の単体テストを導入したいと考えています。Vitestに挑戦したいです。<br>
## プロジェクトフォルダ階層<br>
app3-vite
  ├─public
  └─src
      ├─components
      │  ├─counter
      │  ├─todo
      │  └─weather
      └─test<br>

## 【セットアップ手順やライブラリインストールをまとめます】<br>
・任意のフォルダにて下記コマンドを使用する。<br>
npm create vite@latest<br>
npm install<br>
・次に必要なライブラリをインストールしています。<br>
npm install react-burger-menu --save<br>
npm install react-router-dom<br>
npm install xlsx file-saver<br>
npm install @mui/material @emotion/react @emotion/styled<br>
npm install @mui/icons-material<br>
npm install --save randomatic<br>
npm install localforage<br>
npm install --save react-modal<br>
npm install uuid<br>
・開発用サーバー起動<br>
npm run dev<br>
・ビルド方法<br>
npm run build<br>

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
