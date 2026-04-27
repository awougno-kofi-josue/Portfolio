import {
  Briefcase,
  Code2,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Smartphone,
  Star,
} from 'lucide-react'

export const rotatingRoles = [
  'Developpeur Frontend React',
  'Developpeur Mobile React Native',
  "Createur d'interfaces performantes",
]

export const stats = [
  { value: '5+', label: 'projets marquants' },
  { value: 'React', label: 'stack frontend principale' },
  { value: 'Lome', label: 'base et disponibilité' },
  { value: 'Nova', label: 'experience santé numerique' },
]

export const featureCards = [
  {
    icon: Rocket,
    title: 'Frontend moderne',
    text: "Interfaces rapides, responsives et pensees pour l'utilisateur final.",
  },
  {
    icon: Smartphone,
    title: 'Mobile React Native',
    text: 'Experiences mobiles fluides avec une logique produit claire et maintenable.',
  },
  {
    icon: Layers3,
    title: 'Integration full-stack',
    text: "Connexion propre avec API, gestion d'etat et composants reutilisables.",
  },
]

export const heroTechStack = ['React', 'React Native', 'Tailwind', 'Laravel', 'FastAPI']

export const projects = [
  {
    title: 'Nova Health ',
    description:
      "Application médicale intélligente pour l'orientation des patients et la coordination inter-hospitalière au Togo.",
    stack: ['React' , 'UX'],
    highlight: '2e place - Challenge Tech Sante',
    links: [{ label: 'Voir le projet', href: '#' }],
  },
  {
    title: 'Frontend et Mobile chez Nova Health',
    description:
      "Conception et developpement du site vitrine de Nova Health avec une attention particuliere a la performance et a l'experience utilisateur.",
    stack: ['React', 'React Native', 'UI Design', 'API'],
    highlight: 'Poste actuel',
    links: [{ label: 'Voir le projet', href: '#' }],
  },
  {
    title: "Gestion d'archives",
    description:
      "Plateforme de gestion documentaire permettant le telechargement, la consultation et l'ajout de fichiers PDF et DOCX.",
    stack: ['Laravel', 'Blade', 'Cloudinary', 'PostgreSQL', 'UI'],
    links: [{ label: 'Voir la plateforme', href: 'https://notre-archive-web.onrender.com/' }],
  },
  {
    title: 'API Gestion de Garage',
    description:
      'API RESTful securisee par JWT pour gerer vehicules, clients, interventions et authentification.',
    stack: ['Laravel', 'JWT', 'MySQL', 'REST API'],
    links: [{ label: 'Voir la plateforme', href: 'https://github.com/awougno-kofi-josue/Backend_garage_management' }],
  },
  {
    title: 'Plateforme de quiz',
    description:
      "Application interactive avec classement general et espace d'echange pour renforcer l'engagement des utilisateurs.",
    stack: ['JavaScript', 'UI', 'Gamification'],
    links: [{ label: 'Voir la plateforme', href: 'https://je-suis-genie.great-site.net' }],
  },
  {
    title: 'Classification d\'images de chiens et de chats par deep learning',
    description:
      'Modele de deep learning pour classifier les images de chiens et de chats avec une precision élevée.',
    stack: ['Python', 'Keras'],
    links: [{ label: 'Voir le projet', href: 'https://github.com/awougno-kofi-josue/Algorithmes/blob/main/Chat_Chat.ipynb' }],

  },
  {
    title: 'Analyse des données sur le paludisme en Afrique',
    description:
      "Analyse approfondie des tendances du paludisme en Afrique, mettant en lumière les zones les plus touchées et les facteurs de risque associés.",
    stack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    links: [{ label: 'Voir le projet', href: 'https://github.com/awougno-kofi-josue/Analyse_sante/blob/main/paludisme.ipynb' }],
  },
  {
    title: 'MyPocket - Application de gestion de budget personnel',
    description:
      "Application mobile pour aider les utilisateurs à suivre leurs dépenses, créer des budgets personnalisés et visualiser leurs habitudes de consommation.",
    stack: ['React Native', 'LocalStorage', 'UI/UX'],
    links: [{ label: 'Voir le projet', href: 'https://github.com/awougno-kofi-josue/MyPokect' }],
  }

]

export const skillGroups = [
  {
    title: 'Frontend',
    items: ['React JS', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS', 'UI responsive'],
  },
  {
    title: 'Mobile',
    items: ['React Native', 'Navigation', 'Integration API', 'UX mobile'],
  },
  {
    title: 'Backend et data',
    items: ['Laravel', 'PHP', 'MySQL', 'Python', 'Power BI', 'Excel avancé','Machine Learning', 'Deep Learning'],
  },
]

export const highlightCards = [
  {
    icon: Code2,
    title: 'Developpement web',
    text: "Creation d'interfaces modernes, composants reutilisables et integrations API soignees.",
  },
  {
    icon: Smartphone,
    title: 'Developpement mobile',
    text: 'Experiences React Native fluides et coherentes, orientees usage reel.',
  },
  {
    icon: Briefcase,
    title: 'Experience metier',
    text: 'Sante numerique, solutions documentaires, pedagogie et outils de gestion.',
  },
  {
    icon: Star,
    title: 'Valeurs',
    text: 'Simplicite, fiabilite, progression continue et attention au detail.',
  },
]

export const experiences = [
  {
    period: '2025 - Present',
    title: 'Developpeur Frontend et Mobile',
    company: 'Nova Health - Lome, Togo',
    points: [
      "Developpement d'interfaces web en React et d'ecrans mobile en React Native.",
      "Participation a la conception produit pour ameliorer les parcours utilisateurs dans la sante numerique.",
      "Collaboration avec les equipes techniques autour des integrations API, de la performance et de la qualite UI.",
    ],
  },
  {
    period: '2025 - 2026',
    title: 'Participant - Challenge Tech Santé',
    company: 'Nova Health Team - Togo',
    points: [
      "Conception d'une application medicale intelligente avec assistant IA.",
      "Contribution a l'architecture technique React et FastAPI.",
      'Classement 2e parmi les equipes participantes.',
    ],
  },
  {
    period: '2024 - Present',
    title: 'Enseignant de mathematiques',
    company: 'CPL Le Rossignol de Lome',
    points: [
      "Conception de cours et accompagnement pedagogique des eleves.",
      'Transmission structuree, vulgarisation et rigueur dans les explications.',
    ],
  },
  {
    period: '2023 & 2025',
    title: 'Operateur de saisie',
    company: 'CENI - Togo',
    points: [
      'Traitement precis de donnees sensibles et respect de la confidentialite.',
      "Gestion methodique de volumes importants d'informations.",
    ],
  },
  {
    period: '2023-2024',
    title: 'Enseignant de mathematiques',
    company: 'CPL Prospérité Divine N°1',
    points: [
      "Conception de cours et accompagnement pedagogique des eleves.",
      "Transmission structurée, vulgarisation et rigueur dans les explications.",
    ],
  }
]

export const education = [
  {
    period: '2024 - 2025',
    title: 'Developpement web et mobile full-stack',
    school: 'D-CLIC, OIF',
    text: 'Formation couvrant les technologies front-end, back-end, tests et bonnes pratiques de developpement.',
  },
  {
    period: '2020 - 2024',
    title: 'Licence fondamentale en mathématiques',
    school: 'Université de Lomé',
    text: 'Parcours en mathematiques fondamentales.',
  },
  {
    period: '2020',
    title: 'Baccalauréat général - Sciences et mathematiques',
    school: 'Lycée Amoussoukope',
    text: 'Obtention avec mention et félicitations du jury.',
  },
]

export const skillLevels = [
  ['React / React Native', '90%'],
  ['UI responsive', '92%'],
  ['Laravel / API', '80%'],
  ['Analyse de donnees', '72%'],
  ['Python', '85%'],
  ['JavaScript', '88%'],
  ['SQL', '75%'],
  ['Git', '80%'],
  ['Docker', '50%'],
  ['Machine Learning', '60%'],
  ['Deep Learning', '55%'],
  ['Power BI', '70%'],
  ['Excel avancé', '78%'],

]

export const contactCards = [
  {
    icon: MapPin,
    title: 'Adresse',
    value: 'Agoe-Legbassito, Lome, Togo',
    href: 'https://maps.google.com/?q=Agoe+Legbassito+Lome+Togo',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'josueawougno@gmail.com',
    href: 'mailto:josueawougno@gmail.com',
  },
  {
    icon: Phone,
    title: 'Téléphone',
    value: '+228 93 94 71 71',
    href: 'tel:+22893947171',
  },
]

export const resumeSectionIcons = {
  experience: Briefcase,
  education: GraduationCap,
}
