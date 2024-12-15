import './App.css';
import './HamburgerMenu.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';　//as　routerに切替
import Home from './components/home';  //アプリHomeのページ追加
import NotFound from './components/not_found'; //ルーティング設定で見つからない時のページ
import Title from "./components/Title";   //天気インポート
import  Form from "./components/Form"; //天気インポート
import Results from "./components/Results";  //天気インポート
import Loading from "./components/Loading"; //天気インポート
import { useState } from "react";
import axios from "axios";
import Digit from "./components/DigitalDateTime"; //リアルタイム時計
import TodoApps from './components/TodoApps';  //TodoAppsのページ追加
import Inquiry from './components/Inquiry';  //問い合わせページ追加
import CalendarApp from './components/CalendarApp'; //カレンダーアプリ追加
import { bubble as Menu } from "react-burger-menu";　//ハンバーガーメニューライブラリ使用

function App() {

 const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState({
      country: "",
      cityName: "",
      temperature: "",
      condition: "",
      icon:""
  });
//APIと連動させる処理
  const getWeather = (e) => {
        e.preventDefault();
        setLoading(true);
        axios.get(`https://api.weatherapi.com/v1/current.json?key=6f35053e6229470bb0522409230111&q=${city}&aqi=no`).then(res => {
          setResults({
            country: res.data.location.country,
            cityName: res.data.location.name,
            temperature: res.data.current.temp_c,
            conditionText: res.data.current.condition.text,
            icon: res.data.current.condition.icon
        })
        setCity("");
        setLoading(false);
    })
    .catch(err => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"));
        
}
//コンポーネント配置
//リンク追加
  return (
  <>
  <Router>
    <div id="App">
          <div className="wrapper">
          <div className="container">
        {/* ハンバーガーメニュー */}
          <Menu >
          <Link className="menu-item" to ="/">World Weather アプリ</Link>
          <Link className="menu-item" to="/src/components/TodoApps.js" >ReactTodoアプリを開く</Link>
          <Link className="menu-item" to="/src/components/CalendarApp.js">簡易カレンダーアプリを開く</Link>
          <Link className="menu-item" to="https://quiz-app2-masatuber.netlify.app" target="_blank" rel="noopener noreferrer">クイズアプリを開く</Link>
          <Link className="menu-item" to="https://www.youtube.com/@uverworldroyz1231/about" target="_blank" rel="noopener noreferrer">Youtubeチャンネルはこちら</Link>
          <Link className="menu-item" to="/src/components/Inquiry.js">開発者にお問い合わせページはこちら</Link>
          </Menu>
          
          {/* タイトルよりも上に配置する */}
            <Title />
            <Form getWeather={getWeather} setCity={setCity} city={city} />
                {loading ? <Loading /> : <Results results={results} />}
            <font color="black"><div className="dit"><Digit /></div></font>      
                
      <button><Link to="msnweather:"><font color="black">Windows天気アプリ起動</font></Link></button>
      <button><Link to="https://www.google.com/maps/d/viewer?mid=1VFroURwY3NC19qYVgHeMpb_c2vM&hl=ja&ll=-3.81666561775622e-14%2C17.82600400000001&z=1" target="_blank" rel="noopener noreferrer"> <font color="black">世界地図</font></Link>
      </button>
      {/* ルーティング 用*/}
        <main id="page-wrap">
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/src/components/TodoApps.js" element={<TodoApps />} />
            <Route path="/src/components/inquiry.js" element={<Inquiry />} />
            <Route path="/src/components/CalendarApp.js" element={<CalendarApp />} /> 
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>           
        </div>
      </div>
      </div>
  </Router>
</>
  );
}

export default App;