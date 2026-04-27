import { ContactForm, ContactInfoCard, SectionHeader } from '../components'
import { contactCards } from '../data/siteData'

export function ContactPage() {
  return (
    <section className="container-shell py-14 md:py-20">
      <SectionHeader
        kicker="Contact"
        title="Parlons de votre prochain projet"
        copy="Je suis disponible pour collaborer sur une interface web moderne, une application mobile React Native ou l'evolution d'un produit existant."
      />

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-5">
          {contactCards.map((item) => (
            <ContactInfoCard key={item.title} {...item} />
          ))}
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
