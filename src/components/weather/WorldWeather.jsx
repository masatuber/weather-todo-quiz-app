import { useState } from 'react';
import axios from 'axios';
import ShareButtonList from '../shareSns/ShareButtonList';
import HomeIcon from "@mui/icons-material/Home";
import Title from './Title';
import VisitorCounter from '../counter/VisitorCounter';
import DigitalDateTime from '../DigitalDateTime';
import Home from './Home';
import JapanWeather from '../japanWeather/JapanWeather';
import Form from "./Form";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import Loading from './Loading';
import Results from './Results';
import './worldWeather.css';
function WorldWeather() {
//APIキー定義
const WEATHER_API_KEI = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;

const [city, setCity] = useState("");

const [loading, setLoading] = useState(false);

const [results, setResults] = useState({
  country: "",
    cityName: "",
    temperature: "",
    condition: "",
    icon: "",
});

// 非同期なのにawait使用してない問題を発見、改善
const getWeather = async (e) => {
  e.preventDefault();

  try {

    setLoading(true);

    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEI}&q=${city}&aqi=no`
    );

    // thenをやめてステートの更新関数を直接呼ぶ
    setResults({
      country: response.data.location.country,
      cityName: response.data.location.name,
      temperature: response.data.current.temp_c,
      condition: response.data.current.condition.text,
      icon: response.data.current.condition.icon,
    });

    setCity("");

  } catch (error) {

// 正しい国が入力されない場合はリロード促す
    alert( 
      "エラーが発生しました。ページをリロードして、もう一度トライしてください。"
    );

// コンソールにエラー履歴残す
    console.error(error);

  } finally {

    //ローディングを終了
    setLoading(false);
  }
};

// 外部リンクのアラート
const buttonAlert2 = () => {
  alert(
    "外部サイトが開きました。\n世界国別一覧が調べる事が出来ます。"
  );
};

// リロード関数定義
const reloadPage = () => {
    window.location.reload();
  };

  return (
    <> 
{/* ここまで==== */}
    <div className="home-background">
          <div className="homeBody">
          {/* ヘッター内==== */}
            <header>
              <HomeIcon color="secondary" sx={{ fontSize: 35 }} />
              <ShareButtonList
                title="日本、世界の天気検索,タスク管理,カレンダー,パスワード生成,自動化スクリプト配布,Gemini App,自作SNSの機能があります"
                url="https://masatuber-weather-app3.netlify.app"
              />
              <Title />
              <VisitorCounter />
              <div className="dit">
                <span style={{ color: "black" }}>
                  <DigitalDateTime />
                </span>
              </div>
              <Home />
            </header>
          {/* ヘッター終了=== */}
            <JapanWeather />
            <br />
            <h1>World Weather Forecast Search</h1>
            <br />
            <a
              onClick={buttonAlert2}
              href='https://www.asahi-net.or.jp/~yq3t-hruc/flag_J_ALL.html'
              target="_blank"
              rel="noopener noreferrer"
            >
              世界地図一覧はこちら
            </a>
            <Form
              getWeather={getWeather}
              setCity={setCity}
              city={city}
              className="button1"
            />
            <AutorenewIcon
              sx={{ fontSize: 25 }}
              onClick={reloadPage}
              className="reload"
            />
            { loading ? <Loading />: <Results results={results} /> }
            <p>
              閲覧ありがとうございます。
              <br />
              フリーランス活動の依頼はこちら⇓
              <br />
              <a href='https://coconala.com/services/3630667' target="_blank" className='Freelancer'>低下価格でWebアプリ、サイト開発代行します 画面はReact、API開発はNodejs、即日返信</a>
              <br />
              <a href='https://coconala.com/services/3728537' target="_blank" className='Freelancer'>PowerAutomateDesktop開発します PADは生成AIに質問しても不明瞭のため依頼するメリットあり</a>
              <br />
              <a href='https://coconala.com/services/3630569' target="_blank" className='Freelancer'>PowerAutomate Web版の開発します 総務問合せフローを実務で開発運用した経験あります。</a>
            </p>
          </div>
{/* フッター=== */}
          <footer className="footer">
            <p>
              <small>
                サイト所有者: masaki
              </small>
            </p>
          </footer>

        </div>
{/* ここまで==== */}
    </> 
    
  )
}

export default WorldWeather