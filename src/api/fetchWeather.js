// fetchWeather.js
import axios from 'axios';

export const fetchWeather = async (cityCode) => {
  try {

    // 非同期 変数の値をURLに含めてAPI通信開始
    const response = await axios.get(`https://weather.tsukumijima.net/api/forecast/city/${cityCode}`);

    // axios のレスポンスは自動的にJSONとしてパースされ、response.dataプロパティに格納されるためそのまま返す
    return response.data;
  } catch (error) {

    // エラーの起こし方  https://jito-site.com/javascript-throw-new-error/
    throw new Error("日本の天気情報取得に失敗しました2");
    //APIコール側のエラーは階層2
  }
};