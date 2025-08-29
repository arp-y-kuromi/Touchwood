import { EmailTemplate } from "@/app/contact/components/MailTemplete";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const { userName, email, phone, content } = await request.json();

    // 入力値のバリデーション
    if (!userName || !email || !phone) {
      return NextResponse.json(
        { error: "必須項目が入力されていません" },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "メール送信設定に問題があります" },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const { data, error } = await resend.emails.send({
      from: "Touchwoodホームページ <info@homepagemaker-pro.com>",
      to: ["hayahayato0901@gmail.com"],
      subject: "ホームページからのお問い合わせ",
      html: EmailTemplate({
        userName,
        email,
        phone,
        content,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "メール送信に失敗しました" },
        { status: 500 }
      );
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "予期しないエラーが発生しました" },
      { status: 500 }
    );
  }
}
