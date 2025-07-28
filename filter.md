microCMS API ― URL設計早見表

1. ベース URL と共通ヘッダー

項目	設定
Base URL	https://$MICROCMS_SERVICE_DOMAIN.microcms.io/api/v1
認証ヘッダー	X-MICROCMS-API-KEY: $MICROCMS_API_KEY  ￼


⸻

2. エンドポイント・パス構造

リスト取得   : /{endpoint}
詳細取得     : /{endpoint}/{content_id}

例）/blogs（一覧） / /blogs/abc123（個別）

⸻

3. 主要クエリパラメータ

パラメータ	型	意味・用途	備考
limit / offset	number	ページネーション	デフォルト limit=10
orders	string	ソート順例：-publishedAt,title	先頭に - で降順
filters	string	条件絞り込み	書式は後述
fields	string	必要フィールドだけ返す	id,title,publishedAt
depth	number	参照フィールドをネスト展開	0〜3
q	string	全文検索（text 系のみ）	
ids	string	ID をカンマ区切りで指定	
draftKey	string	下書きプレビュー	
（公式で “常に使える汎用パラメータ” として明記） ￼			


⸻

4. filters の構文

filters=<field>[<operator>]<value>

	•	URL エンコード必須：encodeURIComponent()
	•	主な演算子
	•	equals / not_equals
	•	contains / not_contains（複数参照・複数選択フィールド用）
	•	less_than / greater_than
	•	exists / not_exists
	•	begins_with
（公式一覧） ￼

単一参照フィールド（category など）は equals 固定
例）filters=category[equals]2

⸻

5. よく使う URL パターン例

目的	完整 URL 例	コメント
カテゴリ ID=2 のブログを 6 件	/blogs?filters=category%5Bequals%5D2&limit=6&orders=-publishedAt	%5B = [, %5D = ]
slug でカテゴリ ID を先に取得	/categories?filters=slug%5Bequals%5Dcompany-interview&limit=1	2 段構えで ID を解決
記事詳細（depth=1）	/blogs/abc123?depth=1	参照先を 1 階層展開
本文検索（“SSW” を含む）	/blogs?q=SSW&limit=20	全文検索
公開日が 2025-01-01 以降	/blogs?filters=publishedAt[greater_than]2025-01-01T00:00:00.000Z	ISO8601


⸻

6. コードスニペット（TypeScript / fetch）

const filters = encodeURIComponent("category[equals]2");

const res = await fetch(
  `https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/blogs` +
  `?filters=${filters}&limit=6&orders=-publishedAt`,
  {
    headers: {
      'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY!,
    },
  },
);
const data = await res.json();


⸻

7. チェックリスト（取得できない時）
	1.	コンテンツID と slug を取り違えていないか
	2.	filters= 文字列を URL エンコード しているか
	3.	API キーに GET 権限 があるか
	4.	エンドポイント名や /api/v1 パスが正しいか
	5.	下書きを見たい場合は draftKey を付与したか

⸻

これをチーム共有ドキュメントに貼っておくと、URL 周りで迷った際にすぐ参照できます。