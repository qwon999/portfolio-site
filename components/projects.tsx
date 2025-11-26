import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { projects } from "@/lib/projects-data"

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">주요 프로젝트</h2>
        <p className="text-xl text-muted-foreground mb-16 text-pretty">최근 작업한 프로젝트들을 소개합니다</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 group cursor-pointer h-full">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    자세히 보기
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
