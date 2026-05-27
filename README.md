##### React + Vite

# 天気マルチアプリ React の URL は下記です

  <https://masatuber-weather-app3.netlify.app/>

# 【Web アプリの主力機能】

 世界と日本の天気検索、タスク管理、カレンダー、パスワード生成、ジェミニカスタム App を web 機能として開発、SNSシェアボタン実装しました。

  テストコード(vitest)導入しました。Routerコンポーネントのレンダリング表示テスト実施

# デザイン変更

天気検索のボタンを丸いデザインと緑を採用しました。

#### 不具合情報

日本の天気に用意した値以外入れるとバグが出る

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

```bash
weather-todo-quiz-app
├─public/
└─src/
    ├─api/
    │  └─fetchWeather.js
    ├─components/
    │   ├─counter/
    │   │   │──visitorCounter.css
    │   │   └─VisitorCounter.jsx
    │   ├─japanWeather/
    │   │    ├─japanWeather.css
    │   │    └─JapanWeather.jsx
    │   ├─shareSns/
    │   │   │──ShareButtonList.css
    │   │   └─ShareButtonList.jsx
    │   ├─todo/
    │   │   ├─Todo.jsx
    │   │   ├─todoApps.css
    │   │   ├─TodoApps.jsx
    │   │   └─TodoList.jsx
    │   └─weather/
    │       ├─Form.jsx
    │       ├─home.jsx
    │       ├─Loading.jsx
    │       ├─Results.jsx
    │       └─Title.jsx
    └─test/
        └─components/
            ├─japanWeather.test.jsx
            └─weather.test.jsx

```

# 【インストール】セットアップ手順とライブラリをまとめ

* 任意のフォルダにて下記コマンドを使用する。

```bash
npm create vite@latest
npm install
```

* 次に必要なライブラリをインストールしています。

```bash
npm install axios
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

・セキュリティアラートが出たら確認する項目
```javaScript
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.0",
    "@mui/icons-material": "^6.3.1",
    "@mui/material": "^6.3.1",
    "axios": "^1.15.0",
    "file-saver": "^2.0.5",
    "localforage": "^1.10.0",
    "lodash": "^4.18.1",
    "randomatic": "^3.1.1",
    "react": "^18.3.1",
    "react-burger-menu": "^3.1.0",
    "react-dom": "^18.3.1",
    "react-modal": "^3.16.3",
    "react-router-dom": "^7.5.2",
    "react-share": "^5.2.2",
    "uuid": "^11.0.4",
    "xlsx": "^0.18.5"
  },
  "devDependencies": {
    "@eslint/js": "^9.17.0",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.3.0",
    "@testing-library/user-event": "^14.6.1",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react-swc": "^4.3.0",
    "esbuild-loader": "^4.2.2",
    "eslint": "^9.17.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.16",
    "globals": "^15.14.0",
    "happy-dom": "^18.0.1",
    "vite": "^6.4.2",
    "vitest": "^3.2.3"
```

### セキュリティアラートのpull requestをマージと検証

PRのためのコマンド集とログ

最新取得
```bush
git fetch origin
```
branch一覧確認

```bush
git branch -a
> remotes/origin/HEAD -> origin/main
  remotes/origin/counter
  remotes/origin/dependabot/npm_and_yarn/fast-uri-3.1.2
  remotes/origin/main
  remotes/origin/test
  remotes/origin/test1
  remotes/origin/testcode
```

ここからローカル検証用のコマンド
```bush
git checkout -b dependabot-test origin/dependabot/npm_and_yarn/fast-uri-3.1.2
```

次は依存関係壊れていないか　npm i
```bush
npm run build
```
エラーなく終了
```bush
git diff
``` 
で差分確認　qで終了

検証用で変更ない場合は破棄する
```bush
git status
> modified:   package-lock.json
```

検証用のbranchのため破棄
```bush
git restore package-lock.json
```
```bush
git checkout main
```
次にプルリクマージでmainにマージする
```bush
git pull origin main
```

## リファクタリング

責務分離を意識してAPI通信を分離させる

useStateの値を他のjsファイルに渡す場合はファイル間 変数は使用出来ない

他の方法はjs内に関数を定義、exportさせる、使用するjsx側に関数を呼び出して引数に変数を渡すこと。

```javascript
import { cityCode, setCityCode } from './components/japanWeather/JapanWeather.jsx';
console.log(setCityCode);
```
