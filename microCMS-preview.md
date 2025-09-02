microCMS（マイクロCMS）の「画面プレビュー機能」について詳しくご説明します！

⸻

1. プレビュー機能とは？
	•	管理画面でコンテンツを下書き状態で登録し、実際のサイト上で公開前に確認できる機能です。
ただし、microCMSはヘッドレスCMSのため、従来のCMSのような即時プレビューUIは提供されず、フロントエンド側で独自に実装する必要があります  ￼。

⸻

2. 基本的な仕組みと設定方法

（1）microCMS 管理画面側の設定
	1.	管理画面で対象のコンテンツAPIを選びます。
	2.	「API設定」→「画面プレビュー」へ進みます。
	3.	遷移先のURLテンプレートを指定する欄に {CONTENT_ID} と {DRAFT_KEY} を含めた URL を設定し、「変更する」をクリックします。
これにより、プレビューボタンからその URL に遷移することが可能になります  ￼。

（2）フロントエンド側の実装
	•	プレビュー用の URL に含まれる CONTENT_ID と DRAFT_KEY を取得し、microCMS API に対してそれらを渡して下書きコンテンツを取得・レンダリングします  ￼。

⸻

3. フレームワーク別 実装パターン

① Astro を使った実装例
	•	管理画面で、例えば：
https://example.com/news/preview/?contentId={CONTENT_ID}&draftKey={DRAFT_KEY} といった URL を設定。
	•	フロントエンドでは preview.astro を作成し、クライアントサイドで contentId と draftKey を取得して API リクエストを行います  ￼。

② Next.js（App Router または Draft Mode）を使った実装例
	•	Zenn や Qiita に実装例が多くあります。
● シンプルな Draft Key パラメータ方式（Qiita より）
	•	管理画面でプレビュー用 URL に ?dk={DRAFT_KEY} や ?draftKey={DRAFT_KEY} を含めるよう設定。
	•	フロントエンド側でクエリパラメータ dk を受け取り、API 呼び出し時に { draftKey: searchParams.dk } を渡すようにします。さらに、検索エンジンにインデックスされないように <meta name="robots" content="noindex" /> を付与することも可能です  ￼。
● Next.js の Draft Mode を活用した進化型（Zenn 記事より）
	•	API ルート（例：/app/api/draft/route.ts）で draftMode().enable() を使って Draft Mode を有効化し、リダイレクトします。
	•	プレビュー先のページ（例：/app/preview/[postId]/page.tsx）では、Draft Mode が有効か確認し、下書き状態のコンテンツを取得・表示します  ￼。
	•	さらに Note 上の「プラスジャム」記事では、Draft Mode を使って draftKey をクッキーに保存し、フロントエンド側でもそのクッキーを参照して動的に下書きデータを取得できる構成が紹介されています  ￼。

⸻

導入フローのまとめ（シンプルステップ）

ステップ	内容
1	microCMS 管理画面にて「画面プレビューURL」を設定（{CONTENT_ID} と {DRAFT_KEY} を組み込む）
2	プレビューボタンで生成される URL がフロントエンドへ遷移
3	フロントエンドでコンテンツ ID と Draft キーを取得し、下書き API を叩いて内容をレンダリング
4	フレームワークに応じて、CSR／SSR／Next.js Draft Mode などを活用した実装を選択可能


⸻

どの方法を使うべき？
	•	静的サイト中心の構成（Astro etc.） → クライアントサイドのみで実装可能。
	•	Next.js（App Router 含む）を活用 → Draft Mode を使えばよりセキュアかつ整備されたプレビューが可能。
	•	単純に確認したいだけ → dk パラメータ方式でも十分。

⸻

ご希望のフレームワーク（例：Next.js、Astro、Gatsby など）があれば、それに応じたコード例や注意点のアドバイスも可能です。お気軽にお知らせください！