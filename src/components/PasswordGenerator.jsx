// PasswordGenerator.js
import { useState } from "react";
import randomize from "randomatic";
import { Button, Snackbar } from "@mui/material";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);
  const DIGIT_NUMBER = 12;
  const SNACKBAR_AUTO_HIDE_DURATION = 2000;
  // パスワード生成ハンドラー
  const generatePassword = () => {
    const generatedPassword = randomize("Aa0", DIGIT_NUMBER);
    setPassword(generatedPassword);
  };

  // クリップボードにコピー
  const handleCopyClick = () => {
    if (password) {
      navigator.clipboard
        .writeText(password)
        .then(() => setCopySuccess(true))
        .catch((err) => console.error("コピーに失敗しました:", err));
    }
  };

  const handleCloseSnackbar = () => setCopySuccess(false);

  return (
    <>
      <h2 className="passwordTitle">
        <b>パスワードジェネレータ（12桁・大文字・小文字・数字含む）</b>
      </h2>
      <h2>ランダムパスワード生成</h2>
      <button onClick={generatePassword} className="passwordButton">
        パスワード生成12桁
      </button>
      <br />
      <div className="pwMain">
        <h4>生成されたパスワード： {password}</h4>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleCopyClick}
          disabled={!password} // パスワード未生成時にボタンを無効化
        >
          パスワードをコピーする
        </Button>
        <Snackbar
          open={copySuccess}
          autoHideDuration={SNACKBAR_AUTO_HIDE_DURATION}
          onClose={handleCloseSnackbar}
          message="パスワードをコピーしました。"
        />
      </div>
    </>
  );
};

export default PasswordGenerator;