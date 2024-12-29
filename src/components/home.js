import React from 'react';
//import { useLocation } from "react-router-dom";

const Home = () => {
    //const location = useLocation(); // Router コンテキスト外で使用 -> エラー
  return (
            <>
                <div>
                    <font color="green">
                        <h2>World Weather アプリホーム</h2>
                    </font>
                </div>
            </>
        );
};

export default Home;