//weatherコンポーネントtest APIはまだ行わない
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../../components/weather/home";
import Title from "../../components/weather/Title";
import Form from "../../components/weather/Form";

describe(Home, () => {
  //Homeの初期レンダリングテスト
  test("Homeの初期レンダリングが行われる", () => {
  //コンポーネント設定
   render(<Home />);

  //h2のテキストのテスト
   expect(screen.getByText("World Weather アプリホーム")).toBeInTheDocument();
  });

  test("タイトル、説明のレンダリングが行われる", () => {
    //タイトルコンポーネント設定
    render(<Title />);

    //h1のテキスト
    expect(
      screen.getByText("天気検索 タスク管理 カレンダーアプリ")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Reactアプリの機能：（世界天気予報、タスク管理、カレンダー表示、開発者にメール、自動化スクリプトダウンロード）別のアプリも用意しました、ジェミニチャットボッドカスタムApp、SNSアプリも訪問して頂けると嬉しいです。"
      )
    ).toBeInTheDocument();
    
  })

  test("都市名入力と検索ボタンが表示される", () => {
    //フォームコンポーネント設定
    render(<Form />);

    //inputテキスト要素
    expect(screen.getByPlaceholderText("都市名")).toBeInTheDocument();
    
    //検索ボタンのテキスト表示
    expect(
      screen.getByRole("button", { name: "Get Weather" })
    ).toBeInTheDocument();
  })
});