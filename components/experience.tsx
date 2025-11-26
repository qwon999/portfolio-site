"use client"

import { Briefcase, GraduationCap, Award } from "lucide-react"

const experiences = [
  {
    title: "뤼튼테크놀로지스",
    role: "Agent Developer",
    period: "2025.12 - 현재",
    type: "work",
  },
  {
    title: "삼성 청년 SW 아카데미 (SSAFY 13기)",
    role: "SW 개발 교육",
    period: "2025.01 - 2025.11",
    type: "education",
  },
  {
    title: "SKKU 동역학 연구실",
    role: "Undergraduate Researcher (졸업논문)",
    period: "2024.02 - 2024.06",
    type: "work",
  },
  {
    title: "KIST 양자정보연구단",
    role: "Research Intern",
    period: "2023.03 - 2023.08",
    type: "work",
  },
  {
    title: "성균관대학교",
    role: "화학과 / 전자전기공학부 (학사)",
    period: "2018.03 - 2024.08",
    type: "education",
  },
]

const awards = [
  {
    date: "2025.10",
    title: "SSAFY 프로젝트 우수상",
    description: "「See You Letter」",
  },
  {
    date: "2025.08",
    title: "SSAFY 프로젝트 우수상",
    description: "「예매했냥」",
  },
  {
    date: "2025.05",
    title: "SSAFY 성적우수상",
    description: "1등",
  },
  {
    date: "2025.03",
    title: "삼성 SW 역량테스트 B형 취득",
    description: "",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-balance">Experience & Education</h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-primary" />
              Career Timeline
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-border last:pb-0">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <div className="flex items-start gap-3 mb-2">
                    {exp.type === "education" ? (
                      <GraduationCap className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                    ) : (
                      <Briefcase className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-foreground">{exp.title}</h4>
                      <p className="text-muted-foreground">{exp.role}</p>
                      <p className="text-sm text-muted-foreground/70 mt-1">{exp.period}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" />
              Awards & Certifications
            </h3>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-muted/30 border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="font-bold text-foreground">{award.title}</h4>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{award.date}</span>
                  </div>
                  {award.description && <p className="text-muted-foreground text-sm">{award.description}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
