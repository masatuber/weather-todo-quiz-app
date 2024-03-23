//App.js
import Title from "./components/Title";   
import  Form from "./components/Form";  
import Results from "./components/Results";  
import Loading from "./components/Loading";
import { Link, } from 'react-router-dom'; //ルーティング設定（リンク）
import { useState } from "react";
import axios from "axios";
import Digit from "./DigitalDateTime"; //日時追加
import './App.css';



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
<div className="wrapper">
        <div className="container">
            <Title />
            <Form getWeather={getWeather} setCity={setCity} city={city} />
            {loading ? <Loading /> : <Results results={results} />}
            <div className="link">
            <menu>
                <li><Link to="https://www.youtube.com/@uverworldroyz1231/about"><font color="black">YouTubeチャンネルはこちら</font></Link></li>
                <li><Link to="https://quiz-app2-masatuber.netlify.app"><font color="black">クイズアプリはこちら</font></Link></li>
                <li><Link to="https://todoapp-01-time-01.netlify.app/"><font color="black">タスク管理アプリはこちら</font></Link></li>
            </menu>
            </div>
            <button class="btn"><Link to="msnweather:"><font color="black">Windows天気アプリ起動</font></Link></button>
            <button class="btn"><Link to="https://www.google.com/maps/d/viewer?mid=1VFroURwY3NC19qYVgHeMpb_c2vM&hl=ja&ll=-3.81666561775622e-14%2C17.82600400000001&z=1"> <font color="black">世界地図</font></Link>
            </button>
            <div className="dit"><Digit /></div>
            
        </div>
</div>
 )
};

export default App;