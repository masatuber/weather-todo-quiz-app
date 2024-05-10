import './App.css';
import { BrowserRouter, Route, Routes, Link,  } from 'react-router-dom';
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
          <div className="wrapper">
            <div className="container">
                <Title />
                <Form getWeather={getWeather} setCity={setCity} city={city} />
                {loading ? <Loading /> : <Results results={results} />}
            <font color="black"><div className="dit"><Digit /></div></font>      
          <div className="link">
      <BrowserRouter>
        <ol>
          <li><Link to="/">World Weather アプリ</Link></li>
          <li><Link to="/src/components/TodoApps.js" >ReactTodoアプリを開く</Link></li>
          <li><Link to="https://quiz-app2-masatuber.netlify.app" target="_blank" rel="noopener noreferrer"><font color="black">クイズアプリはこちら</font></Link></li>
          <li><Link to="https://www.youtube.com/@uverworldroyz1231/about" target="_blank" rel="noopener noreferrer">Youtubeチャンネルはこちら</Link></li>
          <li><Link to="/src/components/Inquiry.js">開発者にお問い合わせページはこちら</Link></li>
        </ol>
      <button><Link to="msnweather:"><font color="black">Windows天気アプリ起動</font></Link></button>
      <button><Link to="https://www.google.com/maps/d/viewer?mid=1VFroURwY3NC19qYVgHeMpb_c2vM&hl=ja&ll=-3.81666561775622e-14%2C17.82600400000001&z=1" target="_blank" rel="noopener noreferrer"> <font color="black">世界地図</font></Link>
      </button>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/src/components/TodoApps.js" element={<TodoApps />} />
          <Route path="/src/components/inquiry.js" element={<Inquiry />} />        
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
          </div>
        </div>
      </div>
    </>
  );
}


export default App;