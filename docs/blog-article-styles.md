# ブログ記事詳細ページ スタイルガイド

## 概要
このドキュメントは、ブログ記事詳細ページでmicroCMSから取得したHTMLコンテンツに適用するスタイルを定義します。
Figmaデザインから抽出した仕様に基づいて、各HTMLタグに対応するTailwindCSSクラスを記載しています。

## カラーパレット
Figma変数定義から抽出した主要カラー：
- **プライマリカラー**: #2204db
- **テキストカラー**: #333333 (#1f2937)
- **グレー系**: #737373, #4a5565, #e5e7eb
- **背景**: #ffffff, #fafafa
- **リンクカラー**: #2204db

## フォント仕様
- **フォントファミリー**: Noto Sans JP
- **基本フォントサイズ**: 16px
- **ラインハイト**: 20px
- **フォントウェイト**: 
  - 通常: 350-500
  - 太字: 700

## HTMLタグ別スタイル定義

### 1. 記事メタ情報

#### 記事タイトル (`h1`)
```css
/* TailwindCSS */
className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight"
```
- フォントサイズ: 24px (モバイル) / 32px (デスクトップ)
- フォントウェイト: 700
- 色: #1f2937
- マージン: 下 16px

#### カテゴリタグ
```css
/* TailwindCSS */
className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-2"
```
- 背景色: #2204db (プライマリカラー)
- 文字色: #ffffff
- パディング: 上下 4px、左右 12px
- 角丸: 完全な角丸 (border-radius: 9999px)
- フォントサイズ: 14px

#### 公開日
```css
/* TailwindCSS */
className="text-sm text-gray-500 mb-6"
```
- フォントサイズ: 14px
- 色: #737373
- マージン: 下 24px

### 2. 記事本文要素

#### 段落 (`p`)
```css
/* TailwindCSS */
className="text-base text-gray-800 leading-relaxed mb-4"
```
- フォントサイズ: 16px
- ラインハイト: 1.625 (26px)
- 色: #1f2937
- マージン: 下 16px

#### 見出し (`h2`)
```css
/* TailwindCSS */
className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4 border-l-4 border-blue-600 pl-4"
```
- フォントサイズ: 20px (モバイル) / 24px (デスクトップ)
- フォントウェイト: 700
- 色: #1f2937
- 左ボーダー: 4px 青色 (#2204db)
- パディング: 左 16px
- マージン: 上 32px、下 16px

#### 見出し (`h3`)
```css
/* TailwindCSS */
className="text-[20px] font-bold text-[#101828] bg-[#ffe9ab] px-4 py-2 rounded-md mt-6 mb-3"
```
- フォントサイズ: 20px
- フォントウェイト: 700 (bold)
- テキスト色: #101828 (ダークグレー)
- 背景色: #ffe9ab (淡い黄色)
- パディング: 上下 8px、左右 16px
- 角丸: 6px (rounded-md)
- マージン: 上 24px、下 12px

#### 見出し (`h4`)
```css
/* TailwindCSS */
className="text-base font-semibold text-gray-900 mt-4 mb-2"
```
- フォントサイズ: 16px
- フォントウェイト: 600
- 色: #1f2937
- マージン: 上 16px、下 8px

#### 強調 (`strong`)
```css
/* TailwindCSS */
className="font-bold text-gray-900"
```
- フォントウェイト: 700
- 色: #1f2937

#### 斜体 (`em`)
```css
/* TailwindCSS */
className="italic text-gray-700"
```
- フォントスタイル: italic
- 色: #4a5565

### 3. リスト要素

#### 順序なしリスト (`ul`)
```css
/* TailwindCSS */
className="list-disc list-inside mb-4 space-y-2 text-base text-gray-800"
```
- リストスタイル: disc
- マージン: 下 16px
- 項目間スペース: 8px

#### 順序付きリスト (`ol`)
```css
/* TailwindCSS */
className="list-decimal list-inside mb-4 space-y-2 text-base text-gray-800"
```
- リストスタイル: decimal
- マージン: 下 16px
- 項目間スペース: 8px

#### リスト項目 (`li`)
```css
/* TailwindCSS */
className="pl-2"
```
- パディング: 左 8px

### 4. リンク要素

#### リンク (`a`)
```css
/* TailwindCSS */
className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
```
- 色: #2204db
- ホバー色: #130278
- 下線: あり
- トランジション: 0.2秒

### 5. 画像要素

#### 画像 (`img`)
```css
/* TailwindCSS */
className="w-full h-auto rounded-lg shadow-sm mb-6"
```
- 幅: 100%
- 高さ: auto (アスペクト比維持)
- 角丸: 8px
- シャドウ: 軽微
- マージン: 下 24px

#### 画像キャプション (`figcaption`)
```css
/* TailwindCSS */
className="text-sm text-gray-600 text-center mt-2 italic"
```
- フォントサイズ: 14px
- 色: #737373
- テキスト整列: 中央
- フォントスタイル: italic

### 6. 引用要素

#### 引用 (`blockquote`)
```css
/* TailwindCSS */
className="border-l-4 border-gray-300 pl-4 py-2 mb-4 bg-gray-50 italic text-gray-700"
```
- 左ボーダー: 4px グレー (#e5e7eb)
- パディング: 左 16px、上下 8px
- 背景色: #fafafa
- フォントスタイル: italic
- 色: #4a5565

### 7. コード要素

#### インラインコード (`code`)
```css
/* TailwindCSS */
className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono"
```
- 背景色: #f3f4f6
- 色: #1f2937
- パディング: 上下 4px、左右 8px
- 角丸: 4px
- フォントファミリー: monospace

#### コードブロック (`pre`)
```css
/* TailwindCSS */
className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4 text-sm font-mono"
```
- 背景色: #111827
- 色: #f9fafb
- パディング: 16px
- 角丸: 8px
- オーバーフロー: 横スクロール
- フォントファミリー: monospace

### 8. テーブル要素

#### テーブル (`table`)
```css
/* TailwindCSS */
className="w-full border-collapse border border-gray-300 mb-6"
```
- 幅: 100%
- ボーダー: collapse
- 外枠: 1px グレー

#### テーブルヘッダー (`th`)
```css
/* TailwindCSS */
className="border border-gray-300 bg-gray-100 px-4 py-2 text-left font-semibold text-gray-900"
```
- ボーダー: 1px グレー
- 背景色: #f3f4f6
- パディング: 上下 8px、左右 16px
- テキスト整列: 左
- フォントウェイト: 600

#### テーブルセル (`td`)
```css
/* TailwindCSS */
className="border border-gray-300 px-4 py-2 text-gray-800"
```
- ボーダー: 1px グレー
- パディング: 上下 8px、左右 16px
- 色: #1f2937

### 9. 目次コンポーネント

#### 目次コンテナ
```css
/* TailwindCSS */
className="bg-white relative rounded-[10px] border-[1.5px] border-[#333333] w-full"
```
- 背景色: #ffffff (白)
- ボーダー: 1.5px 黒色 (#333333)
- 角丸: 10px
- パディング: 32px

#### 目次タイトル
```css
/* TailwindCSS */
className="text-[18px] font-bold text-gray-800 mb-6"
```
- フォントサイズ: 18px
- フォントウェイト: 700 (bold)
- 色: #1f2937 (ダークグレー)
- マージン: 下 24px

#### 目次項目（h2）
```css
/* TailwindCSS */
className="text-[16px] font-medium text-[#2204db] leading-[1.6] hover:text-[#130278] hover:underline"
```
- フォントサイズ: 16px
- フォントウェイト: 500 (medium)
- 色: #2204db (プライマリブルー)
- ラインハイト: 1.6
- 番号: 数字（1. 2. 3.）
- ホバー: 色変更・下線表示
- アクティブ時: 太字、色変更 (#130278)

#### 目次項目（h3）
```css
/* TailwindCSS */
className="text-[14px] text-[#2204db] leading-[1.6] hover:text-[#130278] hover:underline ml-4"
```
- フォントサイズ: 14px
- 色: #2204db (プライマリブルー)
- ラインハイト: 1.6
- インデント: 16px (ml-4)
- 番号: 点（•）
- ホバー: 色変更・下線表示
- アクティブ時: 太字、色変更 (#130278)

#### 目次セクション区切り
```css
/* TailwindCSS */
className="border-b border-[#e5e7eb] my-2"
```
- 下ボーダー: 1px ライトグレー (#e5e7eb)
- h2セクション間に表示

### 10. その他の要素

#### 区切り線 (`hr`)
```css
/* TailwindCSS */
className="border-t border-gray-300 my-8"
```
- 上ボーダー: 1px グレー
- マージン: 上下 32px

## レスポンシブ対応

### ブレイクポイント
- モバイル: デフォルト (~768px)
- タブレット: md (768px~)
- デスクトップ: lg (1024px~)

### フォントサイズの調整
```css
/* 見出しのレスポンシブ例 */
className="text-xl md:text-2xl lg:text-3xl"
```

## 実装例

### 記事詳細コンポーネントでの使用
```tsx
// 記事本文のHTMLに対してスタイルを適用
<div 
  className="prose prose-lg max-w-none
    prose-headings:font-bold prose-headings:text-gray-900
    prose-h2:border-l-4 prose-h2:border-blue-600 prose-h2:pl-4
    prose-p:text-gray-800 prose-p:leading-relaxed
    prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
    prose-img:rounded-lg prose-img:shadow-sm
    prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded
  "
  dangerouslySetInnerHTML={{ __html: article.html }}
/>
```

### 目次コンポーネントの使用
```tsx
// 記事コンテンツの上部に目次を表示
<BlogDetailSection blog={blog} />
```

### 目次機能の仕様
- **自動生成**: 記事コンテンツのh2、h3から自動的に目次を生成
- **階層構造**: h2は番号付き（1. 2. 3.）、h3は点（•）でインデント表示
- **スムーズスクロール**: 目次項目クリックで該当見出しにスムーズスクロール
- **アクティブ表示**: 現在表示中のセクションをハイライト
- **配置**: 記事ヘッダーの下、本文の上に表示

### カスタムCSSクラスの定義
```css
/* globals.css または専用のCSSファイル */
.article-content h2 {
  @apply text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4 border-l-4 border-blue-600 pl-4;
}

.article-content p {
  @apply text-base text-gray-800 leading-relaxed mb-4;
}

.article-content img {
  @apply w-full h-auto rounded-lg shadow-sm mb-6;
}
```

## 注意事項

1. **microCMSのHTMLコンテンツ**: `dangerouslySetInnerHTML`を使用する際は、XSS攻撃に注意
2. **画像の最適化**: Next.jsの`Image`コンポーネントを使用する場合は、URLの変換が必要
3. **アクセシビリティ**: 色のコントラスト比やフォントサイズに配慮
4. **SEO**: 見出しの階層構造を適切に保つ

## 更新履歴

- 2024-XX-XX: 初版作成
- Figmaデザインに基づくスタイル定義を追加
- 2025-08-06: h3見出しのデザインをFigmaに合わせて更新（黄色背景#ffe9ab、20pxフォントサイズ、太字スタイルを適用）
- 2025-08-06: 目次機能を実装（Figmaデザインに基づく、自動生成・スムーズスクロール・アクティブ表示機能付き）
- 2025-08-06: 目次を記事コンテンツ上部に移動し、h2/h3の階層構造デザインに変更（h2は番号付き、h3はインデント表示）