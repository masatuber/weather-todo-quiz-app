//inquiryのページ
//メーラー起動はaタグで実装し、別ページとしてルーティング設定
const Inquiry = () => {
  //メールはenvより参照する
  const GMAIL = import.meta.env.VITE_REACT_APP_GMAIL;
  //hrefに直接記述せず、変数に格納しバッククオートで囲う
  const mailLink = `mailto:${GMAIL}?subject=【お問合せ】&amp;body=ご記入ください`;
  return (
    <>
      <font size="3">
        <font color="black">
          <p>
            開発者にお問い合わせをする。
            <br />
            リンクをクリックするとメーラーが起動します。
            <br />
            <a href={mailLink}>お問合せはこちらへ（メーラー起動）</a>
          </p>
        </font>
      </font>
    </>
  );
}; 

export default Inquiry;