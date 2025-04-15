//Python exe ダウンロードページ
// https://node-exe-api.onrender.com//paDL
//  https://node-exe-api.onrender.com/xlsxDL
function PythonDlPage() {


  return (
    <>
      <div>
        <p>
          <font size="3.5">
            概要
            <br />
            <p>　Pythonで自動化スクリプトを配布しています。Windowsの方のみ使用出来ます。</p>
            C:\Program Files (x86)にPower Automate
            Desktopがインストールされている時にrun_pad.exeをダブルクリックで起動します。
            <br />
            今後も自動化プログラム追加予定です。
            <br />
            <p>
              <a
                href="https://node-exe-api.onrender.com/paDL"
                download="run_pad.exe"
              >
                Power Automate Desktop自動起動スクリプトをdownloadする
              </a>
              <br />
              <br />
              タスク管理画面で数値を入力して、Excelにexportしてからこの自動化スクリプトを使用するとSUM関数が予め入力されているので便利な使い方になります。
              <br />
              <a
                href="https://node-exe-api.onrender.com/xlsxDL"
                download="xlsx.exe"
              >
                Excel SUM関数自動埋込スクリプトをdownloadする
              </a>
            </p>
          </font>
        </p>
      </div>
    </>
  );
};

export default PythonDlPage;
