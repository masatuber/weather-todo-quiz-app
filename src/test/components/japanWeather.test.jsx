import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import JapanWeather from "../../components/japanWeather/JapanWeather";

describe(JapanWeather, () => {
   test("JapanWeatherレンダリングテスト", () => {
     //コンポーネント設定
     render(<JapanWeather />);

     //h3のテキストのテスト
     expect(
       screen.getByText("【日本の天気検索が可能です】")
     ).toBeInTheDocument();
   });
});