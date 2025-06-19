import './App.css'; //アプリ全体のCSS
import './HamburgerMenu.css'; //ハンバーガーメニュー用CSS
import Title from "./components/weather/Title";
import Results from "./components/weather/Results";
import Form from "./components/weather/Form";
import Loading from "./components/weather/Loading";
import Home from "./components/weather/home";  //Homeは遅延レンダリングさせないので通常インポート
import DigitalDateTime from "./components/DigitalDateTime";
import VisitorCounter from './components/counter/VisitorCounter';
//ここまでがコンポーネントインポート
import { useState, Suspense, lazy } from "react"; //ページ単位でロードするように設定
import { Routes, Route, Link,  } from "react-router-dom"; //BrowserRouterをindex.jsに移動しコード改善
import axios from "axios";
import { bubble as Menu } from "react-burger-menu"; //ハンバーガーメニューライブラリ使用
import HomeIcon from '@mui/icons-material/Home';  //Homeアイコン導入
import AutorenewIcon from '@mui/icons-material/Autorenew';  //リロードアイコン導入
import ShareButtonList from './components/counter/shareSns/ShareButtonList';

// 動的インポート
const NotFound = lazy(() => import('./components/not_found'));
const TodoApps = lazy(() => import('./components/todo/TodoApps'));
const Inquiry = lazy(() => import('./components/Inquiry'));
const CalendarApp = lazy(() => import('./components/CalendarApp'));
const PasswordGenerator = lazy(() => import('./components/PasswordGenerator'));
const PythonDlPage = lazy(() => import('./components/PythonDlPage'));
//↑にページが増えるごとに動的インポート追加するfunction App( )に含めないこと。

function App( ) {
  //APIキー定義
const WEATHER_API_KEI = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;

//天気の状態管理
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState({
    country: "",
    cityName: "",
    temperature: "", 
    condition: "",
    icon: ""
  });

//APIと連動させる処理
  const getWeather = (e) => {
    e.preventDefault();
    //検索中の状態
    setLoading(true);
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEI}&q=${city}&aqi=no`
      )
      .then((res) => {
        setResults({
          country: res.data.location.country,
          cityName: res.data.location.name,
          temperature: res.data.current.temp_c,
          condition: res.data.current.condition.text,
          icon: res.data.current.condition.icon,
        });
        setCity("");
        //ローディング中
        setLoading(false);
      })
      .catch(() =>
        alert(
          "エラーが発生しました。ページをリロードして、もう一度トライしてください。"
        )
      );
  }

  //リンクで切替わるため、アラート表示でユーザーに知らせる、動的にメッセージが表示される関数定義 error
  const showAlert = (message) => {
    alert(message);
  };

  //天気ページに国一覧検索サイトボタンがあるため、外部サイトリンクを開くアラートを知らせる
  const buttonAlert2 = () => alert("外部サイトが開きました。\n世界国別一覧が調べる事が出来ます。");

  //マテリアルアイコンのリロードイベント（ページリロード） functionで定義
  function reloadPage() {
  window.location.reload();
};

//コンポーネント配置
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
                  ジェミニカスタムAppはこちら
                </Link>
                {/* chat bot API追加 */}
                <Link className="menu-item" to="/TodoApps">
                  ReactTodoアプリを開く
                </Link>
                <Link className="menu-item" to="/Calendar">
                  簡易カレンダーアプリを開く
                </Link>
                <Link className="menu-item" to="/PasswordGenerator">
                  パスワード生成アプリを開く
                </Link>
                <Link className="menu-item" to="/PythonDlPage">
                  Python exeダウンロードページ
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
                  音楽ながらSNSアプリを開く
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
                  開発者にお問合せページはこちら
                </Link>
              </Menu>
              {/* タイトルよりも上に配置する タイトル、時計は常にレンダーする */}
              {/*フラグメントで複数のコーポメントreturnさせる*/}
            </div>
            {/* ルーティング 用*/}
            <Routes>
              <Route
                index
                element={
                  <div className="home-background">
                    <>
                      <div className="homeBody">
                        {/* ホームForm時計結果ボタン常時表示 */}
                        <HomeIcon color="secondary" sx={{ fontSize: 35 }} />
                        <div className="snsButton">
                          <ShareButtonList
                            title="このアプリはマルチアプリです"
                            url="https://masatuber-weather-app3.netlify.app"
                          />
                        </div>
                        <Title />
                        <div className="dit">
                          <font color="black">
                            <DigitalDateTime />
                          </font>
                        </div>
                        <Home />
                        <VisitorCounter />
                        <Link
                          onClick={buttonAlert2}
                          to="https://www.asahi-net.or.jp/~yq3t-hruc/flag_J_ALL.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          世界地図
                        </Link>
                        <Form
                          getWeather={getWeather}
                          setCity={setCity}
                          city={city}
                        />
                        <AutorenewIcon
                          sx={{ fontSize: 25 }}
                          onClick={reloadPage}
                          className="reload"
                        />
                        {/* ↑マテリアルアイコンリロードrenderする */}
                        {loading ? <Loading /> : <Results results={results} />}
                      </div>
                    </>
                  </div>
                  // ↑className="home-backgroundの終了タグ
                }
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
                  <>
                    <div className="pythonDlPage">
                      <h1> Pythonスクリプト exe ファイルダウンロードページ</h1>
                      <div className="dit">
                        <font color="black">
                          <DigitalDateTime />
                        </font>
                      </div>
                      <PythonDlPage />
                    </div>
                  </>
                }
              />

              {/* パスのルートない時のページ描画 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default App;