//クッキーを利用した訪問者数カウント
import "./visitorCounter.css";
import { useEffect, useState } from 'react';

function VisitorCounter() {
  //訪問メッセージの初期値は空
  const [message, setMessage] = useState("");

  //クッキーが有効か確認する条件分岐,useEffectは初回マウント時で、依存配列なし
  useEffect(() => {
    if (navigator.cookieEnabled) {
      const cook = document.cookie + ";";
      const countStart = cook.indexOf("counts=");

      if (countStart === -1) {
        //初回訪問の場合は
        setMessage("1回目の訪問です。");
        document.cookie = "counts=1";
      } else {
        //クッキーに保記録された訪問回数を取得する
        const countEnd = cook.indexOf(";", countStart);
        const cntStr = cook.substring(countStart + 7, countEnd);

        try {
          // 数値に変換して1を加算する
          const cnt = parseInt(cntStr, 10) + 1;
          setMessage(`${cnt}回目の訪問です！ありがとうございます。`);
          document.cookie = "counts=" + cnt + ";";
        } catch (e) {
          setMessage("訪問回数の取得に失敗しました。");
        }
      }
    } else {
      //クッキーが無効場合の処理
      setMessage("クッキーが使用出来ません。");
    }
  }, []);

  return (
    <>
      <div className="counterText">{message}</div>
    </>
  );
}

export default VisitorCounter
