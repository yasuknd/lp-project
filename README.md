# 女性自身プレミアム LP

女性自身プレミアム定期購読のランディングページ（Vite + React + Tailwind CSS v4）。

## 必要環境

- Node.js 20 以上
- [pnpm](https://pnpm.io/) 9 以上

## セットアップ

```bash
pnpm install
pnpm dev
```

ブラウザで表示される URL（通常は http://localhost:5173/）を開いて確認してください。

## コマンド

| コマンド | 説明 |
|--------|------|
| `pnpm dev` | 開発サーバー起動 |
| `pnpm build` | 本番ビルド（`dist/` に出力） |
| `pnpm preview` | ビルド成果物のプレビュー |
| `pnpm ci` | CI と同じビルド検証 |

## ディレクトリ

```
src/
  app/
    App.tsx      # LP 本体
    icons.tsx    # アイコン（SVG）
  styles/        # Tailwind / グローバル CSS
  main.tsx       # エントリーポイント
```

## 注意

- `node_modules/` と `dist/` は Git に含めません（`.gitignore` 参照）
- 依存関係の追加・更新後は `pnpm install` を実行し、`pnpm-lock.yaml` をコミットしてください
