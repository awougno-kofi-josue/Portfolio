import { ProjectCard, SectionHeader } from '../components'
import { projects } from '../data/siteData'

export function ProjectsPage() {
  return (
    <section className="container-shell py-14 md:py-20">
      <SectionHeader
        kicker="Realisations"
        title="Des projets varies, avec une dominante frontend"
        copy="Sante numerique, outils metiers, interfaces pedagogiques ou gestion documentaire : chaque realisation repond a un usage precis."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
