//inquiryのページ
//メーラー起動はaタグで実装し、別ページとしてルーティング設定
const Inquiry = () => {

    return (
        <>
            <font size="3">
                <font color="black">   
                    <p>
                        開発者にお問い合わせをする。<br />
                        リンクをクリックするとメーラーが起動します。<br />
                        <a href="mailto:range1wolf5840@gmail.com?subject=【お問合せ】&amp;body=ご記入ください">お問合せはこちらへ（メーラー起動）</a> 
                    </p>
                </font>
            </font>
        </>
    );     
}; 

export default Inquiry;