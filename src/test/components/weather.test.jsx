//weatherコンポーネントtest APIはまだ行わない
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../../components/weather/home";
import Title from "../../components/weather/Title";
import Form from "../../components/weather/Form";
import App from "../../App";
import { MemoryRouter } from "react-router-dom";

describe(Home, () => {
  //Homeの初期レンダリングテスト
  test("Homeの初期レンダリングが行われる", () => {
    //コンポーネント設定
    render(<Home />);

    //h2のテキストのテスト
    expect(screen.getByText("天気マルチアプリホーム")).toBeInTheDocument();
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
        "Reactアプリの機能：（日本、世界の天気予報検索、タスク管理、カレンダー表示、開発者にメール、自動化スクリプトダウンロード）別のアプリも用意しました、ジェミニチャットボッドカスタムApp、SNSアプリも訪問して頂けると嬉しいです。"
      )
    ).toBeInTheDocument();
  });

  test("都市名入力と検索ボタンが表示される", () => {
    //フォームコンポーネント設定
    render(<Form />);

    //inputテキスト要素
    expect(screen.getByPlaceholderText("都市名")).toBeInTheDocument();

    //検索ボタンのテキスト表示
    expect(
      screen.getByRole("button", { name: "Get Weather" })
    ).toBeInTheDocument();
  });
  // <h1>World Weather Forecast Search</h1>

});

describe(App, () => {
  //Homeの初期レンダリングテスト
  test("ルーターコンポーネント内の表示がされるか", async () => {
    //コンポーネント設定,React Router自体はパスの解析が必要で、非同期に処理されるため
    render(
      // メモリールーターを使用,MemoryRouterはURLルーティングをテストしたり、仮想パスでアプリをレンダリングするために使われる
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    //ルーターコンポーネント内のh1のテキストのテスト
    expect(
      screen.getByText("World Weather Forecast Search")
    ).toBeInTheDocument();
    // リンク用の文字テスト
     expect(screen.getByText("世界地図")).toBeInTheDocument();
  });
});