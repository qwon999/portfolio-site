import { NextResponse } from "next/server"

const RESEND_API_URL = "https://api.resend.com/emails"
const TO_EMAIL = "hqwon99@gmail.com"
const FROM_EMAIL = "Portfolio Contact <contact@hagyuwon.info>"

type ContactPayload = {
  name: string
  email: string
  message: string
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>
    const name = body.name?.trim()
    const email = body.email?.trim()
    const message = body.message?.trim()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "필수 정보가 누락되었습니다." }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: "메일 전송 설정이 완료되지 않았습니다." }, { status: 500 })
    }

    const payload = {
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      reply_to: email,
      subject: `포트폴리오 문의: ${name}`,
      text: `이름: ${name}\n이메일: ${email}\n\n메시지:\n${message}`,
    }

    const res = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const detail = await res.text()
      console.error("Resend error:", detail)
      return NextResponse.json({ error: "메일 전송에 실패했습니다." }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json({ error: "메일 전송 중 오류가 발생했습니다." }, { status: 500 })
  }
}
