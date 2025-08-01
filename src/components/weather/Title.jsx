// Title. js 
const Title = () => {
  //CSS定数
  const FONT_SIZE_NUMBER = "20px";
    return (
      <>
        {/* {FONT_SIZE_NUMBER] */}
        <h1>天気検索 タスク管理 カレンダーアプリ</h1>
        <span style={{ fontSize: FONT_SIZE_NUMBER }}>
          <p>
            Reactアプリの機能：（日本、世界の天気予報検索、タスク管理、カレンダー表示、開発者にメール、自動化スクリプトダウンロード）
            <br />
            別のアプリも用意しました、ジェミニチャットボッドカスタムApp、SNSアプリも訪問して頂けると嬉しいです。
          </p>
        </span>
      </>
    ); 
};


export default Title;