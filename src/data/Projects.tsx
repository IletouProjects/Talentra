export type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  budget: string;
  duration: string;
  location: string;
  skills: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Refonte d’une plateforme e-commerce",
    description:
      "Modernisation de l’expérience utilisateur et amélioration du parcours d’achat.",
    longDescription:
      "Une entreprise spécialisée dans la distribution souhaite moderniser sa plateforme e-commerce. La mission comprend l’analyse du parcours existant, la conception des nouvelles interfaces et l’intégration d’une expérience responsive.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    category: "Design et développement",
    budget: "1 500 000 FCFA",
    duration: "8 semaines",
    location: "À distance",
    skills: ["UX Design", "React", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Application mobile de livraison",
    description:
      "Conception d’une application permettant de commander et suivre des livraisons.",
    longDescription:
      "Une startup logistique recherche une équipe capable de concevoir une application mobile simple et performante pour la gestion des commandes, le suivi des livreurs et les notifications clients.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    category: "Développement mobile",
    budget: "2 400 000 FCFA",
    duration: "12 semaines",
    location: "Lomé et à distance",
    skills: ["React Native", "API REST", "UI Design"],
  },
  {
    id: 3,
    title: "Identité visuelle pour une fintech",
    description:
      "Création d’une identité de marque moderne pour une solution financière.",
    longDescription:
      "La mission consiste à définir une direction artistique complète : logo, palette graphique, typographie, règles d’utilisation et premiers supports de communication.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    category: "Branding",
    budget: "850 000 FCFA",
    duration: "4 semaines",
    location: "À distance",
    skills: ["Brand Strategy", "Logo Design", "Brand Book"],
  },
  {
    id: 4,
    title: "Campagne digitale de lancement",
    description:
      "Déploiement d’une campagne multicanale pour le lancement d’un nouveau service.",
    longDescription:
      "L’entreprise recherche un spécialiste capable de construire la stratégie éditoriale, produire les contenus, planifier la diffusion et suivre les performances de la campagne.",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80",
    category: "Marketing digital",
    budget: "1 200 000 FCFA",
    duration: "6 semaines",
    location: "Hybride",
    skills: ["Social Media", "Copywriting", "Analytics"],
  },
  {
    id: 5,
    title: "Tableau de bord de gestion",
    description:
      "Développement d’un dashboard pour centraliser les indicateurs d’activité.",
    longDescription:
      "Une PME souhaite disposer d’un tableau de bord clair pour suivre ses ventes, ses dépenses, ses clients et ses principaux indicateurs de performance.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    category: "Application métier",
    budget: "1 800 000 FCFA",
    duration: "10 semaines",
    location: "Lomé",
    skills: ["React", "TypeScript", "Data Visualization"],
  },
  {
    id: 6,
    title: "Site institutionnel pour un cabinet",
    description:
      "Création d’un site corporate moderne présentant l’expertise du cabinet.",
    longDescription:
      "Le projet prévoit la conception et le développement d’un site professionnel responsive, optimisé pour la lisibilité, la crédibilité et la prise de contact.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
    category: "Développement web",
    budget: "950 000 FCFA",
    duration: "5 semaines",
    location: "À distance",
    skills: ["React", "Responsive Design", "SEO"],
  },
];