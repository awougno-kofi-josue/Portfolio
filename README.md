# Portfolio de Kofi Yosua Awougno

Site React (Vite) statique, bilingue (FR/EN), avec thème clair/sombre, animations
framer-motion et formulaire de contact EmailJS. Aucune bibliothèque de composants
tierce.

## Démarrer en local

```bash
npm install
npm run dev
```

Puis ouvrir l'URL affichée dans le terminal (en général `http://localhost:5173`).

Pour générer et prévisualiser la version de production :

```bash
npm run build
npm run preview
```

## Fonctionnalités

- **Navbar fixe** avec navigation interne, indicateur de section actif par couleur,
  bouton de thème (soleil/lune), bascule FR/EN et menu mobile sous 1024 px.
- **Thème clair/sombre** complet. Toutes les couleurs passent par des variables CSS
  dans `src/styles/tokens.css`. Le choix est mémorisé dans `localStorage` et appliqué
  avant le premier rendu par un petit script inline dans `index.html` pour éviter un
  flash de mauvais thème.
- **Hero** avec photo professionnelle, effet machine à écrire sur les domaines de
  compétence et symboles mathématiques discrets en arrière-plan.
- **Animations au scroll** via `framer-motion` et le composant réutilisable
  `src/components/Reveal.jsx`. Les images de recherche et de football utilisent
  `src/components/ParallaxMedia.jsx`.
- **Profil** avec faits rapides et index de compétences, sans statistique inventée.
- **Parcours** en deux blocs, expérience professionnelle et formation, sans rail
  vertical décoratif.
- **Réalisations** avec un projet de recherche mis en avant et une liste numérotée.
- **Contact** avec coordonnées directes et formulaire EmailJS.
- **Certifications** avec aperçu protégé (filigrane, clic droit et glisser-déposer
  désactivés).

## Structure

- `src/components/` : un composant par section, plus `Navbar.jsx`, `Hero.jsx`,
  `ScrollProgress.jsx`, `ContactForm.jsx`, `Reveal.jsx`, `ParallaxMedia.jsx` et
  `icons/Icon.jsx`.
- `src/hooks/useTypewriter.js` : effet machine à écrire utilisé dans la Hero.
- `src/i18n/` : `LanguageContext.jsx` (FR/EN), `ThemeContext.jsx` (clair/sombre) et
  `translations.js` pour tout le contenu bilingue.
- `src/data/links.js` : coordonnées et ordre des sections.
- `src/data/emailjs.js` : identifiants EmailJS du formulaire de contact.
- `src/styles/` : `tokens.css` (palette claire/sombre, typographie), `global.css`,
  `layout.css` (navbar, grille de page) et `sections.css` (styles par section).
- `src/assets/images/` : portrait, photo de football, illustration de mécanique des
  fluides et aperçu de certification.

## Formulaire de contact

Le formulaire utilise EmailJS. Les identifiants sont dans `src/data/emailjs.js` et
peuvent être remplacés par des variables d'environnement :

```bash
VITE_EMAILJS_PUBLIC_KEY=...
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
```

Le template EmailJS doit accepter les variables `to_email`, `from_name`, `reply_to`,
`subject` et `message`. Le destinataire est repris de `links.email` dans
`src/data/links.js`. Si le template fixe déjà le destinataire, le champ caché
`to_email` est simplement ignoré.

## Référencement (SEO)

- Balises meta dans `index.html` (description, Open Graph, Twitter Card, canonical)
  et schéma `Person` en JSON-LD.
- `public/robots.txt` et `public/sitemap.xml` sont en place.
- Le domaine canonique utilisé pour le sitemap, robots, canonical et Open Graph est `https://kofi-portfolio.pages.dev/`.
- Le site est une SPA côté client. Pour une indexation optimale au-delà des balises
  meta statiques, un hébergeur avec pré-rendu (Vercel, Netlify avec prerendering, ou
  un passage à Next.js plus tard) améliorera l'indexation.

## Certifications, protection de l'aperçu

L'image du certificat Coursera affiche un filigrane et désactive le clic droit ainsi
que le glisser-déposer. Aucune technique côté navigateur ne peut empêcher une capture
d'écran. Cette protection dissuade le téléchargement direct du fichier, rien de plus.

## Prochaines étapes

- Back-end pour rendre les sections projets et publications dynamiques.
- Ajouter de vrais articles dans la section Publications au fur et à mesure.
- Remplacer le domaine d'exemple avant la mise en ligne.
