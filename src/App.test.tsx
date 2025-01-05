import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// テストスイートの定義: 「Vite + React」の初期画面をテスト
describe("Initial Vite + React Screen", () => {
  // テスト1: メイン見出しが正しく表示されるか確認
  test("renders the main heading", () => {
    // App コンポーネントをレンダリング
    render(<App />);

    // レベル1の見出し (<h1>) が存在し、"Vite + React" というテキストが含まれているか確認
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Vite + React"
    );
  });

  // テスト2: クリック可能なボタンが正しく動作するか確認
  test("renders a clickable button", () => {
    // App コンポーネントをレンダリング
    render(<App />);

    // ボタン要素を取得
    const button = screen.getByRole("button");

    // ボタンの初期テキストが "count is 0" であることを確認
    expect(button).toHaveTextContent("count is 0");

    // ボタンをクリック
    fireEvent.click(button);

    // クリック後のボタンのテキストが "count is 1" に変化していることを確認
    expect(button).toHaveTextContent("count is 1");
  });

  // テスト3: 外部リンクが正しく表示されているか確認
  test("renders external links", () => {
    // App コンポーネントをレンダリング
    render(<App />);

    // Vite 公式サイトへのリンクを取得
    const viteLink = screen.getByRole("link", { name: /vite/i });

    // Vite リンクが正しい URL ("https://vite.dev") を持っていることを確認
    expect(viteLink).toHaveAttribute("href", "https://vite.dev");

    // React 公式サイトへのリンクを取得
    const reactLink = screen.getByRole("link", { name: /react/i });

    // React リンクが正しい URL ("https://react.dev") を持っていることを確認
    expect(reactLink).toHaveAttribute("href", "https://react.dev");
  });

  // テスト4: 初期画面のレンダリング結果がスナップショットと一致しているか確認
  test("matches the snapshot", () => {
    // App コンポーネントをレンダリングし、DOM の断片 (スナップショット) を取得
    const { asFragment } = render(<App />);

    // 現在のレンダリング結果がスナップショットと一致していることを確認
    expect(asFragment()).toMatchSnapshot();
  });
});
