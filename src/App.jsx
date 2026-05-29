import './App.css'; //アプリ全体のCSS
import './HamburgerMenu.css'; //ハンバーガーメニュー用CSS
import Title from "./components/weather/Title";
import DigitalDateTime from "./components/DigitalDateTime";
import WorldWeather from './components/weather/WorldWeather';
//====ここまでがコンポーネントインポート=====
import { useState, Suspense, lazy } from "react"; //ページ単位でロードするように設定
import { Routes, Route, Link,  } from "react-router-dom"; //BrowserRouterをindex.jsに移動しコード改善
import { bubble as Menu } from "react-burger-menu"; //ハンバーガーメニューライブラリ使用

// ====動的インポート====
const NotFound = lazy(() => import('./components/not_found'));
const TodoApps = lazy(() => import('./components/todo/TodoApps'));
const Inquiry = lazy(() => import('./components/Inquiry'));
const CalendarApp = lazy(() => import('./components/CalendarApp'));
const PasswordGenerator = lazy(() => import('./components/PasswordGenerator'));
const PythonDlPage = lazy(() => import('./components/PythonDlPage'));
//====↑にページが増えるごとに動的インポート追加するfunction App( )に含めないこと。====

function App( ) {

  return (
    <>
      {/* 遅延用ラップSuspense*/}
      <Suspense fallback={<div className="pgLoading">Loading.......</div>}>
        <div className="container">
          <div className="wrapper">
            {/* ハンバーガーメニュー 配置用*/}
            <div className="menuContainer">
              <Menu>
                <Link className="menu-item" to="/">
                  World Weather アプリ
                </Link>
                <Link
                  className="menu-item"
                  onClick={() =>
                    showAlert("ジェミニカスタムAppが新規タブで開きました。")
                  }
                  to="https://gemini-bot-v025.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gemini custom　appを開く
                </Link>
                {/* chat bot API追加 */}
                <Link className="menu-item" to="/TodoApps">
                  タスク管理アプリを開く
                </Link>
                <Link className="menu-item" to="/Calendar">
                  簡易カレンダーアプリを開く
                </Link>
                <Link className="menu-item" to="/PasswordGenerator">
                  パスワード生成アプリを開く
                </Link>
                <Link className="menu-item" to="/PythonDlPage">
                  Python exe　DLページを開く
                </Link>
                <Link
                  className="menu-item"
                  onClick={() =>
                    showAlert("音楽ながらSNSアプリが新規タブで開きました。")
                  }
                  to="https://news-nagara-sns.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  音楽ながらSNSを開く
                </Link>
                <Link
                  className="menu-item"
                  onClick={() =>
                    showAlert("クイズアプリが新規タブで開きました。")
                  }
                  to="https://quiz-app2-masatuber.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  クイズアプリを開く
                </Link>
                <Link
                  className="menu-item"
                  onClick={() =>
                    showAlert("Youtubeチャンネルが新規タブで開きました。")
                  }
                  to="https://www.youtube.com/@uverworldroyz1231"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtubeチャンネルはこちら
                </Link>
                <Link className="menu-item" to="/Inquiry">
                  開発者にお問合せはこちら
                </Link>
              </Menu>
              {/* タイトルよりも上に配置する タイトル、時計は常にレンダーする */}
              {/*フラグメントで複数のコーポメントreturnさせる*/}
            </div>
            {/* ルーティング 用*/}
            <Routes>
              <Route
                index
                element={ <WorldWeather /> }
              />

              {/* タスク管理を描画 */}
              <Route
                path="/TodoApps"
                element={
                  <>
                    <div className="todoList">
                      <TodoApps />
                    </div>
                  </>
                }
              />

              {/* カレンダーを描画 */}
              <Route
                path="/Calendar"
                element={
                  <>
                    <div className="backgroundCalendar">
                      <div className="calendarTitle">
                        <CalendarApp />
                      </div>
                    </div>
                  </>
                }
              />

              {/* お問合せを描画 */}
              <Route
                path="/Inquiry"
                element={
                  <>
                    <div className="inquiryPage">
                      <Title />
                      <div className="dit">
                        <font color="black">
                          <DigitalDateTime />
                        </font>
                      </div>
                      <Inquiry />
                    </div>
                  </>
                }
              />

              {/* パスワード生成を描画 */}
              <Route
                path="/PasswordGenerator"
                element={
                  <div className="password-background">
                    <>
                      <PasswordGenerator />
                      <DigitalDateTime />
                    </>
                  </div>
                }
              />

              {/* Pythonダウンロード描画 */}
              <Route
                path="/PythonDlPage"
                element={
                  <div className="pythonDlPage">
                    <>
                      <h1> Pythonスクリプト exe ファイルダウンロードページ</h1>
                      <div className="dit">
                        <span style={{ color: "#dcf806" }}>
                          <DigitalDateTime />
                        </span>
                      </div>
                      <PythonDlPage />
                    </>
                  </div>
                }
              />

              {/* パスのルートない時のページ描画 */}
              <Route path="*" element={<NotFound />} />
              <Route path="/sitemap.xml" />
            </Routes>
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default App;