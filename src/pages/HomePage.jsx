import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import heroPortrait from '../assets/photo3.png'
import { FeatureCard, ProjectCard, SectionHeader } from '../components'
import { featureCards, heroTechStack, projects, rotatingRoles, stats } from '../data/siteData'

export function HomePage() {
  const [roleIndex, setRoleIndex] = useState(0)
  const featuredProjects = projects.slice(0, 3)

  useEffect(() => {
    const id = window.setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % rotatingRoles.length)
    }, 2400)

    return () => window.clearInterval(id)
  }, [])

  return (
    <>
      <section className="container-shell grid gap-10 py-14 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            <span className="h-2 w-2 rounded-full bg-accent" /> Disponible pour projets web et mobile
          </div>

          <h1 className="max-w-4xl text-5xl font-extrabold leading-none tracking-[0] text-white sm:text-6xl lg:text-7xl">
            Kofi Yosua <span className="text-accent">Awougno</span>
          </h1>

          <p className="mt-5 min-h-[2rem] text-xl font-semibold text-slate-300 sm:text-2xl">
            {rotatingRoles[roleIndex]}
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Je transforme des idées en experiences numeriques modernes. Aujourd&apos;hui, je travaille comme
            <span className="font-semibold text-white"> developpeur frontend et mobile (React Native) chez Nova Health</span>,
            avec une approche centrée sur la clarte, la performance et l&apos;élégance visuelle.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/realisations"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-ink shadow-glow transition hover:-translate-y-0.5"
            >
              Voir mes projets <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 font-semibold text-white transition hover:border-white/20 hover:bg-white/5"
            >
              Me contacter
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="glass-panel p-4">
                <div className="text-2xl font-extrabold text-accent">{item.value}</div>
                <div className="mt-1 text-sm text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel relative overflow-hidden p-6 sm:p-8">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative flex flex-col items-center text-center">
            <img
              src={heroPortrait}
              alt="Portrait de Josue Awougno"
              className="mb-6 h-60 w-60 rounded-[2rem] border border-white/10 object-cover object-top shadow-glow"
            />
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Base a Lome - Togo</p>
            <h2 className="mt-3 text-3xl font-extrabold text-white">React - React Native - Laravel</h2>
            <p className="mt-4 max-w-md text-base leading-7 text-slate-300">
              Developpeur orienté produit, passionné par les interfaces utiles, les parcours clairs et les applications qui ont un impact concret.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {heroTechStack.map((tech) => (
                <span key={tech} className="rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-6 md:py-10">
        <div className="grid gap-5 md:grid-cols-3">
          {featureCards.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className="container-shell py-16 md:py-20">
        <SectionHeader
          kicker="Réalisations"
          title="Des projets pensés pour le terrain"
          copy="Une sélection des projets les plus représentatifs de mon parcours, entre santé² numerique, interfaces frontend et solutions metiers."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} compact />
          ))}
        </div>
      </section>

      <section className="container-shell pb-16 md:pb-24">
        <div className="glass-panel flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="section-kicker">Collaboration</p>
            <h2 className="mt-2 text-3xl font-extrabold text-white">Vous avez un projet en tete ?</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
              Je peux vous aider a concevoir une interface moderne, une application mobile React Native ou une solution web performante adaptee a vos besoins.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-ink transition hover:-translate-y-0.5"
          >
            Discutons-en <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
