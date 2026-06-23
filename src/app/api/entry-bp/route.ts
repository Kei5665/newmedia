import { NextResponse } from "next/server";

// 2027新卒 鈑金塗装職LP（/entry/gulliver/newgraduate）の会社説明会お申し込み受付。
// 既存の /api/contact と同方式で Lark Webhook に通知する。
// BP専用チャンネルに送るため LARK_WEBHOOK_URL_BP を優先し、無ければ LARK_WEBHOOK_URL にフォールバック。

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const name = (form.get("name") || "").toString().trim();
    const email = (form.get("email") || "").toString().trim();
    const tel = (form.get("tel") || "").toString().trim();
    const area = (form.get("area") || "").toString().trim();

    const errors: string[] = [];
    if (!name) errors.push("お名前は必須です。");
    if (!email) errors.push("メールアドレスは必須です。");
    else if (!isValidEmail(email)) errors.push("メールアドレスの形式が正しくありません。");

    if (errors.length > 0) {
      return NextResponse.json({ error: errors.join(" ") }, { status: 400 });
    }

    const webhookUrl = process.env.LARK_WEBHOOK_URL_BP || process.env.LARK_WEBHOOK_URL;
    if (!webhookUrl) {
      return NextResponse.json({ error: "サーバー設定が不足しています。(WEBHOOK)" }, { status: 500 });
    }

    const textLines: string[] = [
      "【2027新卒 鈑金塗装職LP】会社説明会のお申し込みが届きました",
      `お名前: ${name}`,
      `メール: ${email}`,
      tel ? `電話: ${tel}` : undefined,
      area ? `希望エリア: ${area}` : undefined,
      "経路: /entry/gulliver/newgraduate (BP / 2027新卒)",
    ].filter((line): line is string => typeof line === "string");

    const payload = {
      msg_type: "text",
      content: { text: textLines.join("\n") },
    };

    const larkRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const larkData = await larkRes.json().catch(() => ({} as { code?: number }));

    if (
      !larkRes.ok ||
      (larkData && typeof larkData.code !== "undefined" && larkData.code !== 0)
    ) {
      // Lark は {code:0, msg:"ok"} が成功。その他は失敗扱い。
      return NextResponse.json(
        { error: "送信に失敗しました。時間をおいて再度お試しください。" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "不正なリクエストです。" }, { status: 400 });
  }
}
