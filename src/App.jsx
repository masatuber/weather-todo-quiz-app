import { useState, Suspense, lazy } from "react"; //ページ単位でロードするように設定
import { Routes, Route, Link,  } from "react-router-dom"; //BrowserRouterをindex.jsに移動しコード改善
import axios from "axios";
import { bubble as Menu } from "react-burger-menu"; //ハンバーガーメニューライブラリ使用
import HomeIcon from '@mui/icons-material/Home';  //Homeアイコン導入
import AutorenewIcon from '@mui/icons-material/Autorenew';  //リロードアイコン導入
import './App.css';
import './HamburgerMenu.css'; //ハンバーガーメニュー用CSS
import Title from "./components/Title";
import Loading from "./components/Loading";
import Results from "./components/Results";
import Form from "./components/Form";
import Digit from "./components/DigitalDateTime";
import Home from "./components/home";  //Homeは遅延レンダリングさせないので通常インポート

// 動的インポート
const NotFound = lazy(() => import('./components/not_found'));
const TodoApps = lazy(() => import('./components/TodoApps'));
const Inquiry = lazy(() => import('./components/Inquiry'));
const CalendarApp = lazy(() => import('./components/CalendarApp'));
const PasswordGenerator = lazy(() => import('./components/PasswordGenerator'));
const PythonDlPage = lazy(() => import('./components/PythonDlPage'));
//↑にページが増えるごとに動的インポート追加するfunction App( )に含めないこと。
function App( ) {

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
    setLoading(true);
    axios.get(`https://api.weatherapi.com/v1/current.json?key=6f35053e6229470bb0522409230111&q=${city}&aqi=no`)
      .then(res => {
        setResults({
          country: res.data.location.country,
          cityName: res.data.location.name,
          temperature: res.data.current.temp_c,
          condition: res.data.current.condition.text,
          icon: res.data.current.condition.icon
        })
        setCity("");
        setLoading(false);
      })
      .catch(( ) => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"));
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
          <div id="App">
            <div className="wrapper">
              <div className="container">
  {/* ハンバーガーメニュー 配置用*/}
                <Menu>
                  <Link className="menu-item" onClick={() => showAlert("World Weatherアプリが開きました。") }
                    to="/">World Weather アプリ</Link>
                  <Link className="menu-item" onClick={() => showAlert("ReactTodoアプリが開きました。") } 
                    to="/TodoApps">ReactTodoアプリを開く</Link>
                  <Link className="menu-item" onClick={() => showAlert("簡易カレンダーアプリが開きました。") } 
                    to="/Calendar">簡易カレンダーアプリを開く</Link>
                    <Link className="menu-item" onClick={() => showAlert("パスワード生成アプリが開きました。") }
                    to="/PasswordGenerator">パスワード生成アプリを開く</Link>
                    <Link className="menu-item" onClick={() => showAlert("Python exeダウンロードページ開きました。") }
                    to="/PythonDlPage">Python exeダウンロードページ</Link>        
                  <Link className="menu-item"  onClick={() => showAlert("クイズアプリが新規タブで開きました。") }
                    to="https://quiz-app2-masatuber.netlify.app" target="_blank" rel="noopener noreferrer">クイズアプリを開く</Link>
                  <Link className="menu-item" onClick={() => showAlert("Youtubeチャンネルが新規タブで開きました。") }
                    to="https://www.youtube.com/@uverworldroyz1231" target="_blank" rel="noopener noreferrer">Youtubeチャンネルはこちら</Link>
                  <Link className="menu-item" onClick={() => showAlert("お問合せページが開きました。") }
                    to="/Inquiry">開発者にお問合せページはこちら</Link>
                    
                </Menu>
  {/* タイトルよりも上に配置する タイトル、時計は常にレンダーする */}
  {/* ルーティング 用*/}
  {/*フラグメントで複数のコーポメントreturnさせる*/}
                <main>
                  <Routes>
                    <Route index element={<div className="home-background">
                              <>
        {/* ホームForm時計結果ボタン常時表示 */}
                            <HomeIcon color="secondary" sx={{ fontSize: 35 }}/>
                            <Title />
                              <div className="dit">
                                    <font color="black"><Digit /></font>
                              </div>
                          <Home />                         
                              <Link onClick={buttonAlert2} to="https://www.asahi-net.or.jp/~yq3t-hruc/flag_J_ALL.html" target="_blank" rel="noopener noreferrer">世界地図</Link>
                            <Form getWeather={getWeather} setCity={setCity} city={city} />
                            <AutorenewIcon sx={{ fontSize: 25 }} onClick={reloadPage} className="reload"/>
          {/* ↑マテリアルアイコンリロードrenderする */}
                                {loading ? <Loading /> : <Results results={results} />} 
                          </>
                        </div> 
                        // ↑className="home-backgroundの終了タグ
                    }  />
                    <Route path="/TodoApps" element={
                        <>
                          <TodoApps />
                        </>
                      } />
                    <Route path="/Calendar" element={
                      <>
                        <div className="backgroundCalendar">
                          <Title />
                                <div className="dit">
                                      <font color="black"><Digit /></font>
                                </div>
                          <CalendarApp />
                        </div>
                      </>
                  } />
                    <Route path="/Inquiry" element={
                      <>
                        <Title />
                                <div className="dit">
                                      <font color="black"><Digit /></font>
                                </div>
                        <Inquiry />
                      </>
                      } />
                      <Route path="/PasswordGenerator" element={<div className="password-background">
                        <>
                            <PasswordGenerator /> 
                            <Digit />                     
                          </>
                        </div>
                      } />
                      <Route path="/PythonDlPage" element={
                          <>
                            <h1> Pythonスクリプト exe ファイルダウンロードページ</h1>
                            <div className="dit">
                                        <font color="black"><Digit /></font>
                            </div>
                              <PythonDlPage />
                          </>
                      } />
                    <Route path="*" element={<NotFound />} />                    
                  </Routes>
                </main>
              </div>
            </div>
          </div>        
        </Suspense>
    </>
  );
};

export default App;