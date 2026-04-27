import aboutPortrait from '../assets/photo1.jpg'
import { HighlightCard, InfoTile, SectionHeader } from '../components'
import { highlightCards, skillGroups } from '../data/siteData'

export function AboutPage() {
  return (
    <section className="container-shell py-14 md:py-20">
      <SectionHeader
        kicker="A propos"
        title="Un profil hybride entre produit, code et pedagogie"
        copy="Developpeur web et mobile base a Lome, je combine rigueur technique, sens du detail visuel et capacite a expliquer clairement des sujets complexes."
      />

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="glass-panel p-6">
          <img src={aboutPortrait} alt="Josue en exterieur" className="h-96 w-full rounded-3xl object-cover" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <InfoTile label="Ville" value="Lome, Togo" />
            <InfoTile label="Diplome" value="Licence" />
            <InfoTile label="Email" value="josueawougno@gmail.com" />
            <InfoTile label="Statut" value="Disponible" />
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass-panel p-8">
            <h2 className="text-2xl font-extrabold text-white">Mon approche</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              J&apos;aime créer des produits numériques utiles, sobres et robustes. Mon parcours m&apos;a permis de naviguer entre développement frontend,
              développement mobile, backend et analyse de données. Cette polyvalence me permet de comprendre un produit dans son ensemble et de
              prendre de meilleures décisions techniques.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Au-dela du code, je m&apos;interesse a l&apos;impact réel des applications : clarté des parcours, rapidité d&apos;execution, lisibilité de l&apos;interface et
              cohérence de l&apos;expérience sur tous les supports.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className="glass-panel p-6">
                <h3 className="text-xl font-bold text-white">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {highlightCards.map((item) => (
              <HighlightCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>

      {/* <section className="mt-16">
        <SectionHeader
          kicker="Galerie"
          title="Un portfolio recentre sur le contenu"
          copy="Les realisations sont presentees sans galerie photo, avec des descriptions claires et des liens directs vers chaque projet."
        />
        <div className="glass-panel p-8 text-center text-slate-300">
          <p>Chaque projet peut maintenant afficher un ou plusieurs liens utiles : demo, code source ou presentation.</p>
        </div>
      </section> */}
    </section>
  )
}
