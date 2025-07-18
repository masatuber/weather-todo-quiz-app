//Python exe ダウンロードページ
// https://node-exe-api.onrender.com//paDL
//  https://node-exe-api.onrender.com/xlsxDL
import axios from "axios";
import { useState } from "react";

function PythonDlPage() {
  //ダウンロードAPI遅延問題用に状態管理
  const [loading, setLoading] = useState(false);

  const FONT_SIZE = "18px";

  const paDlHandle = async () => {
    setLoading(true);

    //responseType: "blob"はaxiosのレスポンスを設定出来る
    //.thenでサーバーからの応答を受け取った後の処理を指示します,今回はexeファイルのため、axiosのみの処理が出来ない
    axios
      .get("https://node-exe-api.onrender.com/paDL", {
        responseType: "blob",
      })
      .then((response) => {
        //バックエンド側のバイナリデータを取得
        const blobData = response.data;

        //blobから一時URLを生成
        const downloadUrl = window.URL.createObjectURL(blobData);

        //ダウンロード用のlinkを生成
        const link = document.createElement("a");
        link.href = downloadUrl;

        //ダウンロードファイル名を設定
        link.setAttribute("download", "run_pad.exe");

        //リンクを自動clickしダウンロードを開始
        link.click();

        //HTML 要素を削除するメソッド
        link.remove();

        //revokeObjectURL()は、createObjectURL()で作成したオブジェクトURLを無効化し、ブラウザのメモリを解放するためのメソッド
        window.URL.revokeObjectURL(link);

        //DL遅延を表示
        setLoading(false);
      })
      .catch((error) => {
        console.error("ダウンロード中にエラーが発生が発生しました:", error);
      });
  };

  const xlsxDlHandle = async () => {
    setLoading(true);
    axios
      .get("https://node-exe-api.onrender.com/xlsxDL", {
        responseType: "blob",
      })
      .then((response) => {
        //バックエンド側のバイナリデータを取得
        const blobData = response.data;

        //blobから一時URLを生成
        const downloadUrl = window.URL.createObjectURL(blobData);

        //ダウンロード用のlinkを生成
        const link = document.createElement("a");
        link.href = downloadUrl;

        //ダウンロードファイル名を設定
        link.setAttribute("download", "xlsx.exe");

        //リンクを自動clickしダウンロードを開始
        link.click();

        //HTML 要素を削除するメソッド
        link.remove();

        //revokeObjectURL()は、createObjectURL()で作成したオブジェクトURLを無効化し、ブラウザのメモリを解放するためのメソッド
        window.URL.revokeObjectURL(link);

        //DL遅延を表示
        setLoading(false);
      })
      .catch((error) => {
        //エラー処理
        console.error("ダウンロード中にエラーが発生が発生しました:", error);
      });
  };

  return (
    <>
      <div>
        <p>
          <span style={{ fontSize: FONT_SIZE }}>
            概要
            <br />
            {loading && <div>ダウンロードをリクエスト中お待ちください...</div>}
            <p>
              　Pythonで自動化スクリプトを配布しています。Windowsの方のみ使用出来ます。
            </p>
            C:\Program Files (x86)にPower Automate
            Desktopがインストールされている時にrun_pad.exeをダブルクリックで起動します。
            <br />
            今後も自動化プログラム追加予定です。
            <br />
            <p>
              <button onClick={paDlHandle}>
                Power Automate Desktop自動起動スクリプトをdownloadする
              </button>
              <br />
              <br />
              タスク管理画面で数値を入力して、Excelにexportしてからこの自動化スクリプトを使用するとSUM関数が予め入力されているので便利な使い方になります。
              <br />
              <button onClick={xlsxDlHandle}>
                Excel自動化スクリプトをdownloadする
              </button>
            </p>
          </span>
        </p>
      </div>
    </>
  );
}

export default PythonDlPage;
