# ブログデザイン仕様書（プロンプト形式）

このドキュメントは、本サイトのブログデザインを他のWebサイトでも再現できるようにまとめた設計仕様書です。

---

## プロンプト：ブログページのデザイン実装

以下の仕様に基づいて、モダンで読みやすいブログページを実装してください。

### 1. デザインコンセプト

- **スタイル**: クリーンでプロフェッショナル、読みやすさを最優先
- **配色**: ブルー系のプライマリカラーを基調としたミニマルデザイン
- **タイポグラフィ**: 日本語は読みやすいゴシック体、英語はモダンなサンセリフ
- **レイアウト**: シングルカラム、中央揃え、十分な余白

---

### 2. カラーパレット

```css
:root {
  /* プライマリカラー */
  --color-primary: #2563eb;        /* メインブルー */
  --color-primary-dark: #1d4ed8;   /* ホバー時のブルー */

  /* テキストカラー */
  --color-text: #1a1a2e;           /* 見出し・強調テキスト */
  --color-text-body: #333333;      /* 本文テキスト */
  --color-text-light: #6b7280;     /* サブテキスト */
  --color-text-muted: #888888;     /* 日付等 */

  /* 背景カラー */
  --color-bg: #ffffff;             /* メイン背景 */
  --color-bg-gray: #f8fafc;        /* セクション背景 */
  --color-bg-code: #f1f5f9;        /* インラインコード背景 */
  --color-bg-pre: #1e293b;         /* コードブロック背景 */

  /* アクセントカラー */
  --color-code-text: #e11d48;      /* インラインコード文字色 */

  /* ボーダー */
  --color-border: #e5e7eb;
}
```

---

### 3. タイポグラフィ

```css
:root {
  /* フォントファミリー */
  --font-en: 'Montserrat', 'Lato', sans-serif;
  --font-ja: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', sans-serif;
  --font-mono: 'SF Mono', 'Consolas', 'Monaco', monospace;
}

/* ベースの行間 */
body {
  line-height: 1.8;
}

/* 本文の行間（ブログ記事内） */
.blog-body {
  line-height: 2.1;
}
```

#### フォントサイズ一覧

| 要素 | PC | モバイル |
|------|-----|---------|
| 記事タイトル | 2.25rem (36px) | 1.375rem (22px) |
| H2見出し | 1.625rem (26px) | 1.25rem (20px) |
| H3見出し | 1.3rem (20.8px) | 1.0625rem (17px) |
| H4見出し | 1.125rem (18px) | 1.125rem (18px) |
| 本文 | 1.0625rem (17px) | 1rem (16px) |
| カテゴリラベル | 0.8rem (12.8px) | 0.75rem (12px) |
| 日付 | 0.9rem (14.4px) | 0.9rem (14.4px) |

---

### 4. レイアウト仕様

#### コンテンツ幅
```css
/* 最大幅 */
--container-width: 1140px;    /* 全体のコンテナ */
--content-width-title: 850px; /* タイトルエリア */
--content-width-body: 720px;  /* 本文エリア */
--content-width-thumbnail: 960px; /* サムネイル */
```

#### セクション構造

```
┌─────────────────────────────────────────────┐
│ パンくずリスト                               │
├─────────────────────────────────────────────┤
│ ヘッダーセクション                           │
│ ┌─────────────────────────────────────────┐ │
│ │ カテゴリラベル                           │ │
│ │ 記事タイトル（最大幅850px）              │ │
│ │ 公開日                                   │ │
│ └─────────────────────────────────────────┘ │
│ 背景: グラデーション(#f8fafc → #f1f5f9)     │
├─────────────────────────────────────────────┤
│ サムネイル画像（最大幅960px）                │
│ ※ヘッダーに40pxめり込む                     │
├─────────────────────────────────────────────┤
│ 記事本文（最大幅720px）                      │
│ 背景: #ffffff                               │
├─────────────────────────────────────────────┤
│ 関連記事セクション                           │
│ 背景: #f8fafc                               │
├─────────────────────────────────────────────┤
│ お問い合わせCTA                              │
└─────────────────────────────────────────────┘
```

---

### 5. コンポーネント詳細

#### 5.1 ヘッダーセクション

```css
.blog-header {
  padding: 140px 0 70px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  text-align: center;
}

/* カテゴリラベル */
.blog-category {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--color-primary);
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.12), rgba(37, 99, 235, 0.06));
  padding: 8px 20px;
  border-radius: 24px;
  margin-bottom: 24px;
  letter-spacing: 0.05em;
}

/* タイトル */
.blog-title {
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 1.5;
  margin-bottom: 24px;
  color: #1a1a1a;
  max-width: 850px;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: -0.02em;
}

/* 日付 */
.blog-date {
  font-family: var(--font-en);
  font-size: 0.9rem;
  color: #888;
  font-weight: 500;
}
```

#### 5.2 サムネイル

```css
.blog-thumbnail {
  max-width: 960px;
  margin: -40px auto 0;  /* ヘッダーにめり込む */
  padding: 0 24px;
}

.blog-thumbnail img {
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}
```

#### 5.3 本文エリア

```css
.blog-content {
  padding: 80px 0;
  background: #fff;
}

.blog-body {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 24px;
  font-size: 1.0625rem;
  line-height: 2.1;
  color: #333;
}
```

---

### 6. 見出しスタイル

#### H2（大見出し）
```css
.blog-body h2 {
  font-size: 1.625rem;
  font-weight: 800;
  margin: 64px 0 28px;
  padding: 0 0 16px;
  border-bottom: 3px solid var(--color-primary);
  color: #1a1a1a;
  letter-spacing: -0.01em;
  line-height: 1.5;
}

.blog-body h2:first-child {
  margin-top: 0;
}
```

#### H3（中見出し）
```css
.blog-body h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin: 48px 0 20px;
  color: #1a1a1a;
  padding-left: 16px;
  border-left: 4px solid var(--color-primary);
  line-height: 1.5;
}
```

#### H4（小見出し）
```css
.blog-body h4 {
  font-size: 1.125rem;
  font-weight: 700;
  margin: 36px 0 16px;
  color: #333;
}
```

---

### 7. テキスト要素

#### 段落
```css
.blog-body p {
  margin-bottom: 28px;
  text-align: justify;
}
```

#### 強調
```css
.blog-body strong {
  font-weight: 700;
  color: #1a1a1a;
}
```

#### リンク
```css
.blog-body a {
  color: var(--color-primary);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
}

.blog-body a:hover {
  border-bottom-color: var(--color-primary);
}
```

---

### 8. リスト

#### 箇条書き（ul）
```css
.blog-body ul {
  margin: 24px 0 32px;
  list-style: none;
  padding-left: 0;
}

.blog-body ul li {
  position: relative;
  padding-left: 24px;
  margin-bottom: 12px;
}

/* カスタム丸ビュレット */
.blog-body ul li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 12px;
  width: 8px;
  height: 8px;
  background: var(--color-primary);
  border-radius: 50%;
}
```

#### 番号付きリスト（ol）
```css
.blog-body ol {
  margin: 24px 0 32px;
  counter-reset: item;
  list-style: none;
  padding-left: 0;
}

.blog-body ol li {
  position: relative;
  padding-left: 36px;
  margin-bottom: 12px;
  counter-increment: item;
}

/* カスタム番号（円形バッジ） */
.blog-body ol li::before {
  content: counter(item);
  position: absolute;
  left: 0;
  top: 2px;
  width: 24px;
  height: 24px;
  background: var(--color-primary);
  color: #fff;
  border-radius: 50%;
  font-size: 0.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

---

### 9. テーブル

```css
.blog-body table {
  width: 100%;
  border-collapse: collapse;
  margin: 32px 0;
  font-size: 0.95rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

/* ヘッダーセル */
.blog-body th {
  background: var(--color-primary);
  color: #fff;
  font-weight: 700;
  padding: 16px 20px;
  text-align: left;
}

/* データセル */
.blog-body td {
  padding: 16px 20px;
  border-bottom: 1px solid #e5e7eb;
  background: #fff;
}

.blog-body tr:last-child td {
  border-bottom: none;
}

/* ストライプ */
.blog-body tr:nth-child(even) td {
  background: #f8fafc;
}
```

---

### 10. 引用

```css
.blog-body blockquote {
  border-left: 4px solid var(--color-primary);
  padding: 20px 24px;
  margin: 32px 0;
  background: #f8fafc;
  border-radius: 0 12px 12px 0;
  color: #555;
  font-style: normal;
}

.blog-body blockquote p {
  margin-bottom: 0;
}
```

---

### 11. コード

#### インラインコード
```css
.blog-body code {
  background: #f1f5f9;
  padding: 3px 8px;
  border-radius: 6px;
  font-family: 'SF Mono', 'Consolas', 'Monaco', monospace;
  font-size: 0.9em;
  color: #e11d48;
}
```

#### コードブロック
```css
.blog-body pre {
  background: #1e293b;
  color: #e2e8f0;
  padding: 24px;
  border-radius: 12px;
  overflow-x: auto;
  margin: 32px 0;
  font-size: 0.9rem;
  line-height: 1.7;
}

.blog-body pre code {
  background: transparent;
  padding: 0;
  color: inherit;
}
```

---

### 12. 画像

```css
.blog-body img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  margin: 40px 0;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}
```

---

### 13. 水平線

```css
.blog-body hr {
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, #e5e7eb, transparent);
  margin: 48px 0;
}
```

---

### 14. 関連記事セクション

```css
.related-posts-section {
  padding: 80px 0;
  background: #f8fafc;
}

.related-posts-title {
  font-size: 1.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 40px;
  color: #1a1a1a;
}

.related-posts-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

/* カード */
.related-post-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.related-post-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

/* サムネイル */
.related-post-thumbnail {
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.related-post-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.related-post-card:hover .related-post-thumbnail img {
  transform: scale(1.05);
}

/* コンテンツ */
.related-post-content {
  padding: 16px;
}

.related-post-category {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--color-primary);
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.12), rgba(37, 99, 235, 0.06));
  padding: 4px 10px;
  border-radius: 12px;
  margin-bottom: 8px;
}

.related-post-title {
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.5;
  color: #1a1a1a;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

---

### 15. レスポンシブ対応

#### タブレット（〜768px）
```css
@media (max-width: 768px) {
  .blog-header {
    padding: 120px 0 50px;
  }

  .blog-title {
    font-size: 1.625rem;
  }

  .blog-thumbnail {
    margin-top: -24px;
  }

  .blog-content {
    padding: 56px 0;
  }

  .blog-body {
    font-size: 1rem;
    line-height: 2;
  }

  .blog-body h2 {
    font-size: 1.375rem;
    margin: 48px 0 24px;
  }

  .blog-body h3 {
    font-size: 1.125rem;
    margin: 40px 0 16px;
  }

  .related-posts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

#### スマートフォン（〜540px）
```css
@media (max-width: 540px) {
  .blog-header {
    padding: 100px 16px 40px;
  }

  .blog-title {
    font-size: 1.375rem;
  }

  .blog-category {
    font-size: 0.75rem;
    padding: 6px 16px;
  }

  .blog-thumbnail {
    padding: 0 16px;
    margin-top: -20px;
  }

  .blog-thumbnail img {
    border-radius: 12px;
  }

  .blog-content {
    padding: 40px 0;
  }

  .blog-body {
    padding: 0 16px;
  }

  .blog-body h2 {
    font-size: 1.25rem;
    margin: 40px 0 20px;
  }

  .blog-body h3 {
    font-size: 1.0625rem;
    padding-left: 12px;
  }

  /* 関連記事：横並びレイアウト */
  .related-posts-grid {
    grid-template-columns: 1fr;
  }

  .related-post-card {
    display: flex;
    flex-direction: row;
  }

  .related-post-thumbnail {
    width: 120px;
    min-width: 120px;
    aspect-ratio: auto;
    height: 100%;
  }

  .related-post-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
```

---

### 16. 技術スタック

#### 推奨技術
- **フレームワーク**: React / Next.js / Vue.js
- **Markdown処理**: react-markdown + remark-gfm
- **スタイリング**: CSS Modules / Tailwind CSS / Styled Components

#### HTMLセマンティクス
```html
<main class="blog-detail-page">
  <!-- パンくずリスト -->
  <nav class="breadcrumb" aria-label="パンくずリスト">...</nav>

  <!-- ヘッダー -->
  <header class="blog-header">
    <div class="container">
      <a href="/blog/category/xxx" class="blog-category-link">カテゴリ</a>
      <h1 class="blog-title">記事タイトル</h1>
      <time class="blog-date" datetime="2025-01-26">2025年1月26日</time>
    </div>
  </header>

  <!-- サムネイル -->
  <figure class="blog-thumbnail">
    <img src="..." alt="記事タイトル" />
  </figure>

  <!-- 記事本文 -->
  <article class="blog-content">
    <div class="container">
      <div class="blog-body">
        <!-- Markdown rendered content -->
      </div>
    </div>
  </article>

  <!-- 関連記事 -->
  <section class="related-posts-section" aria-label="関連記事">
    <div class="container">
      <h2 class="related-posts-title">関連記事</h2>
      <div class="related-posts-grid">
        <!-- カード -->
      </div>
    </div>
  </section>
</main>
```

---

### 17. アクセシビリティ

- `aria-label` でセクションの目的を明示
- `time` 要素に `datetime` 属性を付与
- 画像には適切な `alt` テキストを設定
- 十分なコントラスト比を確保（本文: 7:1以上）
- フォーカス状態の視覚的表示
- 適切な見出し階層（h1 → h2 → h3）

---

### 18. パフォーマンス

- 画像の遅延読み込み（`loading="lazy"`）
- サムネイル画像: 16:9アスペクト比、推奨幅1200px
- Webフォントの最適化（display: swap）
- CSS変数を使用した一貫性のあるスタイリング

---

## 使用例

このデザイン仕様を使って、以下のようなブログページを実装できます：

1. **企業ブログ**: お知らせ、技術記事、事例紹介
2. **メディアサイト**: ニュース、コラム、インタビュー
3. **個人ブログ**: 技術ブログ、旅行記、レビュー
4. **ドキュメントサイト**: ガイド、チュートリアル、FAQ

---

## カスタマイズのヒント

### カラーの変更
`--color-primary` を変更するだけで、全体の配色が変わります：
- オレンジ系: `#f97316`
- グリーン系: `#10b981`
- パープル系: `#8b5cf6`

### フォントの変更
Google Fonts等から好みのフォントを選んで `--font-ja`, `--font-en` を変更：
- 日本語: 'Noto Sans JP', 'M PLUS 1p', 'Kosugi Maru'
- 英語: 'Inter', 'Open Sans', 'Roboto'

### 幅の調整
コンテンツ幅を調整して、好みの読みやすさに：
- 狭め: `--content-width-body: 640px`
- 広め: `--content-width-body: 800px`
