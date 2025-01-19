//PasswordGenerator.js
import randomize from "randomatic";
import { useState, }  from "react";
 const  PasswordGenerator= () => {
   const [ password, setPassword ] = useState( '' );
   //パスワード生成ハンドラー
   const generatePassword = ( ) => {
    const generatedPassword = randomize('Aa0', 12);
    setPassword(generatedPassword);
  };

  return (
    <>
    <h2><b>パスワードジェネレータ（12桁・大文字・小文字・数字含む）</b></h2>
        <h2>ランダムパスワード生成</h2>
             <button onClick={generatePassword} className="passwordButton"> パスワード生成12桁</button><br/>
        <div className="pwMain">
        <h4>生成されたパスワード：  {password}</h4>
        </div>
    </>
  );
};

export default PasswordGenerator;