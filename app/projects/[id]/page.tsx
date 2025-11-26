import { notFound } from "next/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Clock,
  ExternalLink,
  FileText,
  Github,
  Link as LinkIcon,
  Presentation,
  User,
  Video,
  type LucideIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { getProjectById, getAllProjectIds } from "@/lib/projects-data"

export function generateStaticParams() {
  const ids = getAllProjectIds()
  return ids.map((id) => ({
    id,
  }))
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  const linkIconMap: Record<string, LucideIcon> = {
    demo: ExternalLink,
    github: Github,
    paper: FileText,
    ppt: Presentation,
    slides: Presentation,
    video: Video,
    notion: BookOpen,
    blog: FileText,
    other: LinkIcon,
  }

  const existingLinkTypes = new Set((project.links ?? []).map((link) => link.type).filter(Boolean))
  const combinedLinks = [...(project.links ?? [])]

  if (project.demoUrl && !existingLinkTypes.has("demo")) {
    combinedLinks.push({ label: "라이브 데모", url: project.demoUrl, type: "demo" })
  }

  if (project.githubUrl && !existingLinkTypes.has("github")) {
    combinedLinks.push({ label: "GitHub 보기", url: project.githubUrl, type: "github" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-4">
          <Link href="/#projects">
            <Button variant="ghost" size="sm" className="gap-2 hover:gap-3 transition-all">
              <ArrowLeft className="h-4 w-4" />
              프로젝트 목록으로
            </Button>
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">{project.title}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-pretty leading-relaxed">{project.description}</p>
        </div>

        {/* Links Section (Top) */}
        {combinedLinks.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-12">
            {combinedLinks.map((link, index) => {
              const Icon = linkIconMap[link.type ?? "other"] ?? LinkIcon
              const variant = link.type === "demo" ? "default" : "outline"

              return (
                <Button key={index} variant={variant} size="lg" className="gap-2" asChild>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-5 w-5" />
                    {link.label}
                  </a>
                </Button>
              )
            })}
          </div>
        )}

        {/* Meta Info */}
        <div className="flex flex-wrap gap-6 mb-12 pb-12 border-b text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            <span className="font-medium">{project.year}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span className="font-medium">{project.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-5 w-5" />
            <span className="font-medium">{project.role}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-16">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 text-sm font-semibold rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project Image */}
        {project.image && (
          <div className="mb-20 rounded-3xl overflow-hidden border shadow-2xl">
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-auto" />
          </div>
        )}

        {/* Problem Section */}
        {project.problem && (
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Problem</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{project.problem}</p>
          </section>
        )}

        {/* Approach & My Role Section */}
        {project.approach && project.approach.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Approach & My Role</h2>
            <div className="space-y-8">
              {project.approach.map((item, index) => (
                <div key={index} className="pl-6 border-l-4 border-primary">
                  <p
                    className="text-lg text-muted-foreground leading-relaxed text-pretty"
                    dangerouslySetInnerHTML={{
                      __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-bold">$1</strong>'),
                    }}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* What I Learned Section */}
        {project.learned && project.learned.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What I Learned</h2>
            <div className="space-y-6">
              {project.learned.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {index + 1}
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed text-pretty pt-1">{item}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Links Section */}
        {/* CTA Section */}
        <div className="text-center py-20 px-8 bg-primary/5 rounded-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">다른 프로젝트도 확인해보세요</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">더 많은 프로젝트 경험을 살펴보실 수 있습니다</p>
          <Link href="/#projects">
            <Button size="lg" className="text-lg px-8 py-6">
              전체 프로젝트 보기
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
