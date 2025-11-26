"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            연구와 서비스 개발을 경험한 에이전트 개발자
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-balance">
            문제를 파고들어
            <br />
            <span className="text-primary">해법을 찾는</span> 개발자
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed text-pretty max-w-2xl">
            AI 시대, 정의롭고 지속가능한 방향으로 세상을 효율적으로 바꾸는 일을 고민합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base h-14 px-8"
            >
              프로젝트 보기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="text-base h-14 px-8 bg-transparent"
            >
              연락하기
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-muted-foreground/30 rounded-full" />
        </div>
      </div>
    </section>
  )
}
