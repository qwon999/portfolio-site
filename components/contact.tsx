"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, BarChart2 } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 여기에 실제 폼 제출 로직을 구현하세요
    console.log("Form submitted:", formData)
    alert("메시지가 전송되었습니다!")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">함께 만들어요</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            새로운 프로젝트나 협업 제안이 있으시다면 언제든 연락주세요
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8 border-2">
            <h3 className="text-2xl font-bold mb-6">연락처</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">이메일</p>
                  <p className="font-medium group-hover:text-primary transition-colors">hqwon99@gmail.com</p>
                </div>
              </div>

              <a
                href="https://github.com/qwon999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="font-medium group-hover:text-primary transition-colors">github.com/qwon999</p>
                </div>
              </a>

              <a
                href="https://solved.ac/profile/qwon99"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <BarChart2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">solved.ac</p>
                  <p className="font-medium group-hover:text-primary transition-colors">solved.ac/profile/qwon99</p>
                </div>
              </a>
            </div>
          </Card>

          <Card className="p-8 border-2">
            <h3 className="text-2xl font-bold mb-6">메시지 보내기</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="이름"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="이메일"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <Textarea
                  placeholder="메시지를 입력하세요"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="min-h-32 resize-none"
                />
              </div>

              <Button type="submit" className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90">
                메시지 전송
              </Button>
            </form>
          </Card>
        </div>

        <footer className="mt-24 pt-8 border-t border-border text-center text-muted-foreground">
          <p>© 2025 Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </section>
  )
}
