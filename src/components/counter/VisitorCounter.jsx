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
        //初回訪問の場合の表示,更新用関数で動的メッセージ定義
        setMessage("1回目の訪問です。");
        document.cookie = "counts=1";
      } else {
        //クッキーに保記録された訪問回数を取得する
        const countEnd = cook.indexOf(";", countStart);
        const cntStr = cook.substring(countStart + 7, countEnd);
        
        try {
          // 数値に変換して1を加算する
          const cnt = parseInt(cntStr, 10) + 1;
          document.cookie = "counts=" + cnt + ";";

          //訪問1回目はありがとうメッセージ
          if (cnt === 1) {
            setMessage(`${cnt}回目の訪問です！ありがとうございます。`);

          } else if (cnt > 2 ) {
            //2回目以降はSNSシェアメッセージを表示する
            setMessage("何度も訪問ありがとうございます、SNSにシェアして頂けたら嬉しいです！");
          }

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
      {/* 2回目のクッキー取得以降はありがとうメッセージをレンダリングする */}
      <div className="counterText">
       {message}
      </div>
    </>
  );
}

export default VisitorCounter
