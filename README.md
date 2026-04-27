# Portfolio React

Portfolio personnel developpe avec React, Vite et Tailwind CSS.

Le projet presente :

- une page d'accueil avec presentation rapide
- une page `A propos`
- une page `CV`
- une page `Realisations`
- une page `Contact` avec formulaire EmailJS

## Stack

- React
- React Router
- Vite
- Tailwind CSS
- Lucide React
- EmailJS

## Installation

```bash
npm install
```

## Lancer le projet

```bash
npm run dev
```

Build de production :

```bash
npm run build
```

Preview du build :

```bash
npm run preview
```

## Structure

```text
src/
  assets/        images utilisees
  components/    composants reutilisables
  data/          donnees du portfolio
  pages/         pages de l'application
  App.jsx        routes principales
  main.jsx       point d'entree React
  index.css      styles globaux
```

## Personnalisation

La plupart des contenus sont centralises dans :

- `src/data/siteData.js`

Tu peux y modifier :

- les informations du hero
- les statistiques
- les competences
- les experiences
- les projets
- les infos de contact

## Ajouter ou modifier un projet

Chaque projet est defini dans `src/data/siteData.js`.

Exemple :

```js
{
  title: 'Nom du projet',
  description: 'Description du projet',
  stack: ['React', 'API'],
  highlight: 'Optionnel',
  links: [
    { label: 'Demo', href: 'https://example.com' },
    { label: 'GitHub', href: 'https://github.com/example' },
  ],
}
```

La section `Realisations` est volontairement sans galerie photo. Les cartes affichent le texte, la stack et les liens du projet.

## Formulaire de contact avec EmailJS

Le formulaire utilise `@emailjs/browser`.

1. Copier `.env.example` en `.env`
2. Remplir les variables suivantes :

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

Variables envoyees par le formulaire :

- `from_name`
- `reply_to`
- `subject`
- `message`
- `to_email`

Le composant concerne est :

- `src/components/ContactForm.jsx`

## Pages principales

- `/` : accueil
- `/a-propos` : presentation
- `/cv` : parcours et competences
- `/realisations` : projets
- `/contact` : contact

## Notes

- le projet utilise une organisation simple avec pages et composants separes
- le contenu textuel est deja decouple de `App.jsx`
- seuls les assets encore utilises ont ete conserves
