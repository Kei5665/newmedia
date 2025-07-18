以下は Claude Code + Figma Dev Mode MCP で
Download-Figma-Images → get_code を“ワンフロー”化する手順とコツです。
（Next.js + React + Tailwind を想定していますが、他フレームワークでも概念は同じです）

⸻

1. 前提チェック

必要なもの	補足
Figma Dev もしくは Full seat	Dev Mode MCP Server はベータですが Dev／Full seatで使えます ￼
Figma Desktop アプリ	MCP Server はデスクトップ限定。メニュー→Enable Dev Mode MCP Server で起動。ローカルで http://127.0.0.1:3845/sse が立ちます ￼
Claude Code (VS Code拡張 / Cursor など) 最新版	settings.json か .mcp.json に Figma サーバーを登録（後述）。
プロジェクトに画像を置くフォルダ	例: ./public/figma（Next.js の public 配下）


⸻

2. MCP クライアント設定（VS Code 例）

// settings.json 抜粋
"chat.mcp.discovery.enabled": true,
"mcp": {
  "servers": {
    "Figma Dev Mode MCP": {
      "type": "sse",
      "url": "http://127.0.0.1:3845/sse"
    }
  }
},
"chat.agent.enabled": true

これで VS Code の Claude Code サイドバーに
MCP Server: Figma Dev Mode MCP が現れます ￼。

⸻

3. Download-Figma-Images ツールを組み込む
	1.	npm でインストール

bun add @panzer-jack/feuse-mcp   # npm でも可


	2.	.mcp.json にツール定義を追記 （Cursor・Claude Desktop なら “＋ Add tool”）

{
  "mcpServers": {
    "Figma": { "url": "http://127.0.0.1:3845/sse", "type": "sse" }
  },
  "tools": {
    "@Panzer-Jack/feuse-mcp/Download-Figma-Images": {}
  }
}


	3.	チャット入力欄のハンマーアイコンから Download-Figma-Images が見えれば完了。

ツール仕様
必須引数は fileKey / localPath / nodes[]。
nodes には nodeId と保存時の fileName を指定するだけです ￼。

⸻

4. 画像 → コード取得までの実作業フロー

4-1. Figma 側で nodeId を取る
	1.	画像レイヤーを選択 → 右クリック → Copy/Paste → Copy as Link
	2.	クリップボード末尾に ?node-id=12%3A34 のように含まれるので 12:34 を控えます。
（複数画像がある場合は全部メモ）

4-2. Claude Code で画像をローカル保存

/Download-Figma-Images {
  "fileKey": "u8r1Xnabc123",          # Figma ファイルURLから取得
  "localPath": "./public/figma",      # プロジェクト内の保存先
  "nodes": [
    {"nodeId": "12:34", "fileName": "hero.png"},
    {"nodeId": "12:45", "fileName": "logo.svg"}
  ]
}

	•	成功すると public/figma/hero.png などが生成され、ツールは完了メッセージを返します。

4-3. 同じフレームを選択して get_code
	1.	Figma で フレーム全体 を選択（または Frame URL をコピー）。
	2.	プロンプト例

/get_code    # MCP ツール呼び出し

だけでも OK。デフォルトは React + Tailwind の JSX で返ります ￼。

4-4. 画像パスをローカル参照に揃えるコツ

生成コード中の <img src="http://127.0.0.1:3845/assets/..."> を
一発で置き換えたいときは、get_code 直後に続けて指示します：

上記コード内の localhost 画像URLをすべて
`/figma/{元ファイル名}` にリライトし、
Next.js の <Image> を使う形式に修正してください。

プロンプトで意図を明示すると、Claude が AST 変換してくれます。
どうしても残る場合は fixAssets.ts のようなポストビルドスクリプトを用意し、
正規表現で http://127\.0\.0\.1:3845/assets/([^"]+) → /figma/$1 に置換するだけで OK。

⸻

5. より高度なテクニック

シーン	Tips
デザインシステムの再利用	Figma 側で Code Connect を有効にし、get_code_connect_map を一緒に呼ぶと既存コンポーネントに差し替えてくれます ￼
大量画像のバッチ取得	画像レイヤーを一括選択 → “Copy as Link” 複数 → Excel で nodeId / fileName を生成し、まとめて nodes に渡すと高速
他フレームワーク	get_code へ「Vue 3 + Pinia で」「SwiftUI で」等を書くだけで変換可。
大きな画面が重い	フレームを分割して小さめに選択 → 合成は後で。get_code がハングする事例回避 ￼


⸻

6. まとめ
	1.	Download-Figma-Images で実ファイルを public/figma へ保存
	2.	get_code で React + Tailwind JSX を生成
	3.	プロンプト or スクリプトで localhost URL → ローカルパス に変換
	4.	必要に応じて Code Connect / get_variable_defs を併用してデザインシステムと連携

これで 「Figmaを閉じると画像が消える」 問題を解消しつつ、
MCP の恩恵で ピクセルずれの少ないフロント実装 を、ほぼワンクリックで回せます。
ぜひ社内テンプレートに組み込んでみてください！