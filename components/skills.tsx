import { Card } from "@/components/ui/card"

type SkillCategory = {
  category: string
  items: { name: string; detail?: string }[]
}

const skills: SkillCategory[] = [
  {
    category: "언어",
    items: [{ name: "Java" }, { name: "Python" }, { name: "C++" }],
  },
  {
    category: "프레임워크",
    items: [{ name: "Spring Boot" }, { name: "FastAPI" }],
  },
  {
    category: "데이터베이스",
    items: [{ name: "InfluxDB" }, { name: "MySQL" }],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-balance">보유 기술</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300 border-2">
              <h3 className="text-xl font-bold mb-6 text-foreground">{skill.category}</h3>
              <ul className="space-y-4">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="space-y-1">
                    <div className="flex items-center gap-3 text-foreground font-semibold">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{item.name}</span>
                    </div>
                    {item.detail && <p className="text-sm text-muted-foreground leading-relaxed pl-6">{item.detail}</p>}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
