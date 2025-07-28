# microCMS API Schema
Generated 2025-07-28 02:21 (JST)

## Authentication & Base URL

The following two environment variables are assumed in all examples:

| Variable | Purpose |
|----------|---------|
| `MICROCMS_SERVICE_DOMAIN` | Your service domain (substring before `.microcms.io`). |
| `MICROCMS_API_KEY` | API key with at least **Read** permission. |

Example base URL:

```bash
https://$MICROCMS_SERVICE_DOMAIN.microcms.io/api/v1
```

### cURL Example
```bash
curl -H "X-MICROCMS-API-KEY: $MICROCMS_API_KEY" \
  "https://$MICROCMS_SERVICE_DOMAIN.microcms.io/api/v1/blogs?limit=10"
```

### TypeScript / fetch Example
```ts
const res = await fetch(
  `https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/blogs`,
  {
    headers: { 'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY! },
  }
);
const data = await res.json();
```

## Endpoints
### `blogs` Collection

| Field ID | Name (JP) | Kind | Required | Unique | Notes |
| --- | --- | --- | --- | --- | --- |
| title | タイトル | text |  |  |  |
| content | 内容 | richEditorV2 |  |  |  |
| eyecatch | アイキャッチ | media |  |  |  |
| category | カテゴリ | relation |  |  |  |
| slug | スラッグ | text |  |  |  |
| html | 記事(html) | textArea |  |  |  |
| blog-style | 記事形式 | select |  |  |  |

### `categories` Collection

| Field ID | Name (JP) | Kind | Required | Unique | Notes |
| --- | --- | --- | --- | --- | --- |
| name | カテゴリ名 | text |  |  |  |
| slug | スラッグ | textArea |  |  |  |

### `logo` Collection

| Field ID | Name (JP) | Kind | Required | Unique | Notes |
| --- | --- | --- | --- | --- | --- |
| logo | 企業ロゴ | media | ✓ |  |  |
| company | 企業名 | text |  |  |  |

### `member` Collection

| Field ID | Name (JP) | Kind | Required | Unique | Notes |
| --- | --- | --- | --- | --- | --- |
| name | 名前 | text |  |  |  |
| icon | アイコン画像 | media |  |  |  |
| text | 説明文 | textArea |  |  |  |

### `slider` Collection

| Field ID | Name (JP) | Kind | Required | Unique | Notes |
| --- | --- | --- | --- | --- | --- |
| image | 画像 | media | ✓ |  |  |
