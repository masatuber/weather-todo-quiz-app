// 日本の天気API
import "./japanWeather.css";
import { useState } from 'react';
import { fetchWeather } from "../../api/fetchWeather";

function JapanWeather() {
  //天気の状態管理
  const [japanWeather, setJapanWeather] = useState(null);
  
  //入力される都市コード状態管理
  const [cityCode, setCityCode] = useState("");

  //通信中の状態管理
  const [loading, setLoading] = useState(false);

  const searchCityCode = [
    { name: "東京", code: "130010" },
    { name: "大阪", code: "270000" },
    { name: "名古屋", code: "230010" },
    { name: "札幌", code: "016010" },
    { name: "福岡", code: "400010" },
  ];

  const CITY_CODE_DIGIT = 6;

  const handleCode = (e) => {
    setCityCode(e.target.value);
  }

  //フォーム送信時のロジック 非同期あり
  const handleSubmit = async (e) => {
    //ページリロード防止
    e.preventDefault();

    //入力欄が空の場合は終了
    if (!cityCode || cityCode.length !== CITY_CODE_DIGIT) {
      alert("6桁の都市コードを入力してください！");
      return;
    }

    //ロード中開始
    setLoading(true);

    //前回の入力結果をクリアする
    setJapanWeather(null);

    //API通信 エラーハンドリングあり
    try {

      // fetchWeatherよりエクスポートした関数を呼び出します
      const weatherData = await fetchWeather(cityCode);

      // API通信後に更新用関数を更新
      setJapanWeather(weatherData);

    } catch(error) {
      //関数呼び出し側のエラーは階層1
    console.error(error, "日本の天気APIエラー階層1");

    } finally {

      setLoading(false);

    }
  };

  return (
    <>
      <h3 className="title">【日本の天気検索が可能です】</h3>
      <p className="pulldownText">プルダウンを選択してください</p>
      <select
        value={cityCode}
        onChange={handleCode}
        className="pulldownCss"
        style={{ cursor: "pointer" }}
      >
        <option value="">都市を選択してください</option>
        {/* マップ関数でリスト展開する */}
        {searchCityCode.map((city) => (
          <option key={city.code} value={city.code}>
            {city.name}
          </option>
        ))}
      </select>

      <form onSubmit={handleSubmit}>
        <input
          type="tel"
          maxLength="6"
          value={cityCode}
          onChange={(e) => setCityCode(e.target.value)}
          placeholder="都市コード6桁"
          min="0"
          max="9"
          inputMode="numeric"
          className="inputCode"
        />
        {/* style={{ cursor: "pointer" }} をCSSファイルに移動した方が分かりやすい */}
        <button type="submit" className="searchButton">
          天気検索
        </button>
      </form>

      {loading && <p>ロード中...</p>}
      <div>
        <p>
          <span className="weatherResult">
            天気予報検索結果(都市コード入力すると下に天気予報が表示されます)
          </span>
        </p>

        {japanWeather && (
          <div>
            <p className="cityWeather">
              {japanWeather.location.city}の天気予報(3日間)
            </p>
            <span className="descriptionText">
              天気予報詳細→{japanWeather.description.bodyText}
            </span>
            <ul>
              {japanWeather.forecasts.map((forecast) => (
                <li key={forecast.date}>
                  <p className="weatherDate">
                    {forecast.dataLabel}
                    <br />
                    日時： {forecast.date}
                    <br />
                    {forecast.telop}
                  </p>

                  <img src={forecast.image.url} alt="forecast.telop" />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default JapanWeather
