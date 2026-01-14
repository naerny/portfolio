export interface ProjectImage {
  src: string;
  alt: string;
  thumb?: string;
}

export interface Project {
  id: string;
  title: string;
  tagLine: string;
  heroImage?: string;
  images: ProjectImage[];
  skills: string[];
  technologies: string[];
  link?: string;
  github?: string;
  description?: string;
}

export const projects: Project[] = [
  {
    id: 'empire-report',
    title: 'Empire Annual report',
    tagLine: 'Un compte rendu fictif de la situation de l\'empire après la bataille d\'Endor.',
    description: 'Le rapport annuel de l\'empire est un projet d\'expèrimentation autour de la visulation de donnée dans l\'univers de Star Wars. Il montre les pertes subies ainsi que les personnages et espèces avec lesquelles traite l\'empire. \n Ce projet se présente comme un rapport diégétique qui serait présenté au sein même de l\'univers Star Warnes.',
    images: [
      {
        src: '/img/projects/datavis/02.jpg',
        thumb: '/img/projects/datavis/02_small.jpg',
        alt: 'Empire annual report hero section'
      },
      {
        src: '/img/projects/datavis/01.jpg',
        thumb: '/img/projects/datavis/01_small.jpg',
        alt: 'Financial dashboard visualization'
      },
      {
        src: '/img/projects/datavis/04.jpg',
        thumb: '/img/projects/datavis/04_small.jpg',
        alt: 'Mobile responsive view of the report'
      },
      {
        src: '/img/projects/datavis/03.jpg',
        thumb: '/img/projects/datavis/03_small.jpg',
        alt: 'Mobile responsive view of the report'
      },
       {
        src: '/img/projects/datavis/05.jpg',
        thumb: '/img/projects/datavis/05_small.jpg',
        alt: 'Mobile responsive view of the report'
      }
    ],
    skills: ['Data Visualization', 'UI Design', 'Graphic Design', 'Gestion de projet', 'Interaction design'],
    technologies: ['Vue.js', 'Figma', 'D3', 'Git', 'Suite Adobe'],
    github: 'https://github.com/username/portfolio'
  },
  {
    id: 'coachlab',
    title: 'CoachLab',
    tagLine: 'Comment encourager davantage de femmes à devenir entraîneuses de football féminin grâces à des médias actuels et engageants?',
    description: `Coachlab est une campagne de de communication visant à promouvoir le football féminin en Suisse et encourager davantage de femmes à devenir entraîneuses.\n Le projet s'axe autour d'une identité visuelle forte, d'une plateforme pour apprendre l'arbitrage de manière ludique, et des solutions physiques pour atteindre les futurs coaches au bord du terrain.\n L'objectif est de légitimiser les femmes dans le football afin de soutenir les vocations de celles qui souhaitent s'investir comme entraîneuses.`,
    images: [
      {
        src: '/img/projects/coachlab/01.jpg',
        thumb: '/img/projects/coachlab/cover_small.jpg',
        alt: 'E-commerce homepage featuring product grid'
      },
      {
        src: '/img/projects/coachlab/mockup_small.jpg',
        thumb: '/img/projects/coachlab/mockup_small.jpg',
        alt: 'Product detail page with gallery'
      },
       {
        src: '/img/projects/coachlab/27_small.jpg',
        thumb: '/img/projects/coachlab/27_small.jpg',
        alt: 'Product detail page with gallery'
      },
       {
        src: '/img/projects/coachlab/28_small.jpg',
        thumb: '/img/projects/coachlab/28_small.jpg',
        alt: 'Product detail page with gallery'
      },
       {
        src: '/img/projects/coachlab/29_small.jpg',
        thumb: '/img/projects/coachlab/29_small.jpg',
        alt: 'Product detail page with gallery'
      }
    ],
    skills: ['Gestion de projet', 'Coordination d’équipes', 'Suivi des délais et des livrables', 'Analyse des besoins utilisateurs', 'Pilotage de projets digitaux', 'Stratégie de communication', 'Création de contenu', 'Campagnes publicitaires', 'Recherche UX', 'UI/UX Design', 'Développement front-end'],
    technologies: ['Vue.js', 'Tailwind CSS', 'Figma', 'Suite Adobe', 'Git', 'Nuxt.js', 'Notion', 'Miro', 'Asana'],
    github: 'https://github.com/username/ecommerce'
  },

  {
    id: 'terravaud',
    title: 'Terra Vaud',
    tagLine: 'Une application de découverte et valorisation du patrimoine vaudois.',
    description: `Terra Vaud est une application mobile conçue pour découvrir et valoriser le patrimoine culturel et naturel du canton de Vaud. terra Vaud offre une multitude de parcours officiels, permettant aux utilisateurs d\'explorer des sites historiques, des paysages naturels et des trésors cachés à travers des itinéraires thématiques.\n Elle offre aussi un fort aspect participatif, où les utilisateurs peuvent créer et partager leurs propres parcours, contribuant ainsi à l\'enrichissement continu de la plateforme. L\'application vise à promouvoir le tourisme local, encourager la découverte active et renforcer le lien entre les habitants et leur région.`,
    images: [
      {
        src: '/img/projects/terravaud/cover.jpg',
        alt: 'E-commerce homepage featuring product grid'
      },
      {
        src: '/img/projects/terravaud/onboarding.jpg',
        thumb: '/img/projects/terravaud/onboarding_small.jpg',
        alt: 'Product detail page with gallery',
      },
       {
        src: '/img/projects/terravaud/creation_parcours.jpg',
        thumb: '/img/projects/terravaud/creation_parcours_small.jpg',
        alt: 'Product detail page with gallery'
      },
       {
        src: '/img/projects/terravaud/map2.jpg',
        thumb: '/img/projects/terravaud/map2_small.jpg',
        alt: 'Product detail page with gallery'
      },
      {
        src: '/img/projects/terravaud/Brandboard.jpg',
        thumb: '/img/projects/terravaud/Brandboard_small.jpg',
        alt: 'Product detail page with gallery'
      },
      
    ],
    skills: ['UI/UX Design', 'Recherche UX', 'Prototypage', 'Design d\'interaction', 'Design visuel', 'Développement front-end', 'Développement back-end', 'Gestion de projet', 'Coordination d\'équipes', 'Suivi des délais et des livrables', 'Analyse des besoins utilisateurs'],
    technologies: ['Vue.js', 'Tailwind CSS', 'Laravel', 'npm', 'Figma', 'Composer'],
    github: 'https://github.com/username/ecommerce'
  },
  {
    id: 'baleinev',
    title: 'Baleinev Festival 2025',
    tagLine: 'Gérer le site web et travailler sur l\'un des plus grands événements du Nord-Vaudois.',
    description: 'Le Baleinev Festival est le festival estudiantin de la Heig-vd. Son site web doit permettre l\'accès aux informations vitales, la programmation, la billeterie. Il doit aussi représenter fidèlement la ligne graphique de l\'édition.',
    images: [
      {
        src: '/img/projects/baleinev/baleinev_01.jpg',
        thumb: '/img/projects/baleinev/baleinev_01_small.jpg',
        alt: 'E-commerce homepage featuring product grid'
      },
      {
        src: '/img/projects/baleinev/474474932_18483635644033504_119499071726526965_n.jpg',
        thumb: '/img/projects/baleinev/474474932_18483635644033504_119499071726526965_n_small.jpg',
        alt: 'E-commerce homepage featuring product grid'
      },
       {
        src: '/img/projects/baleinev/mobile_small.jpg',
        thumb: '/img/projects/baleinev/mobile_small.jpg',
        alt: 'E-commerce homepage featuring product grid'
      },
       {
        src: '/img/projects/baleinev/insta_small.jpg',
        thumb: '/img/projects/baleinev/insta_small.jpg',
        alt: 'E-commerce homepage featuring product grid'
      },
       {
        src: '/img/projects/baleinev/desktop.png',
        thumb: '/img/projects/baleinev/desktop_small.jpg',
        alt: 'E-commerce homepage featuring product grid'
      },
    ],
    skills: ['Gestion de projet', 'Coordination d’équipes', 'Suivi des délais et des livrables', 'Développement front-end', 'Design UI/UX', 'Maintenance de site web', 'Optimisation des performances web'],
    technologies: ['Wordpress', 'Elementor', 'Docker', 'Machine virtuelle'],
    github: 'https://github.com/username/ecommerce'
  },
  {
    id: 'liris',
    title: 'Liris',
    heroImage: 'top',
    tagLine: 'Un logiciel de gestion des cabinets d\'ophtalmologie, pour aider les professionnels de la santé à gérer leurs patients et leur pratique plus simplement. Et se concentrer sur l\'essentiel.',
    description: 'Liris est une solution logicielle complète conçue pour les cabinets d\'ophtalmologie, visant à simplifier la gestion des patients et des opérations quotidiennes. Le logiciel offre une interface intuitive permettant aux professionnels de la santé de gérer efficacement les rendez-vous, les dossiers médicaux, la facturation et les communications avec les patients. En automatisant les tâches administratives, Liris permet aux ophtalmologistes de se concentrer davantage sur les soins aux patients, améliorant ainsi la qualité du service tout en optimisant la productivité du cabinet.',
    images: [
      {
        src: '/img/projects/liris/08.jpg',
        thumb: '/img/projects/liris/08_small.jpg',
        alt: 'E-commerce homepage featuring product grid'
      },
      {
        src: '/img/projects/liris/06.jpg',
        thumb: '/img/projects/liris/06_small.jpg',
        alt: 'E-commerce homepage featuring product grid'
      },
       {
        src: '/img/projects/liris/03.jpg',
        thumb: '/img/projects/liris/03_small.jpg',
        alt: 'E-commerce homepage featuring product grid'
      },
      {
       src: '/img/projects/liris/04.jpg',
        thumb: '/img/projects/liris/04_small.jpg',
        alt: 'E-commerce homepage featuring product grid'
      },
       {
        src: '/img/projects/liris/05.jpg',
        thumb: '/img/projects/liris/05_small.jpg',
        alt: 'E-commerce homepage featuring product grid'
      },
    ],
    skills: ['Gestion de projet', 'Suivi des délais et des livrables', 'Développement front-end', 'Design UI/UX', 'Relation Client'],
    technologies: ['Wordpress', 'Sass', 'Jquery', 'PHP', 'MySQL', 'Git', 'Figma', 'Wordpress Bedrock'],
    github: 'https://github.com/username/ecommerce'
  },
  {
    id: 'ophtalmique',
    title: 'Hôpital Ophtalmique',
    tagLine: 'Refonte de la homepage du site de l\'Hôpital ophtalmique de Lausanne pour améliorer la présence en ligne et l\'accessibilité pour les patients.',
    description: 'La refonte du site de l\'Hôpital ophtalmique de Lausanne visait à moderniser la présence en ligne de l\'établissement et améliorer l\'expérience utilisateur pour les patients. Ce projet comprenait la réorganisation complète de la homepage, optimisant la navigation, la mise en avant des services et l\'accessibilité aux informations essentielles. Le nouveau site reflète l\'excellence médicale de l\'hôpital tout en facilitant la prise de rendez-vous et l\'accès aux informations pratiques pour les patients.',
    images: [
      {
        src: '/img/projects/ophtalmique/01.jpg',
        thumb: '/img/projects/ophtalmique/01_small.jpg',
        alt: 'E-commerce homepage featuring product grid'
      },
      {
        src: '/img/projects/ophtalmique/02.jpg',
        thumb: '/img/projects/ophtalmique/02_small.jpg',
        alt: 'E-commerce homepage featuring product grid'
      },
       {
        src: '/img/projects/ophtalmique/03.jpg',
        thumb: '/img/projects/ophtalmique/03_small.jpg',
        alt: 'E-commerce homepage featuring product grid'
      },
      {
       src: '/img/projects/ophtalmique/04.jpg',
        thumb: '/img/projects/ophtalmique/04_small.jpg',
        alt: 'E-commerce homepage featuring product grid'
      },
       {
        src: '/img/projects/ophtalmique/05.jpg',
        thumb: '/img/projects/ophtalmique/05_small.jpg',
        alt: 'E-commerce homepage featuring product grid'
      },
    ],
    skills: ['Gestion de projet', 'Suivi des délais et des livrables', 'Développement front-end', 'Design UI/UX', 'Relation Client'],
    technologies: ['Wordpress', 'Sass', 'Jquery', 'PHP', 'MySQL', 'Git', 'Figma', 'Wordpress Bedrock'],
    github: 'https://github.com/username/ecommerce'
  },
  {
    id: 'forumepfl',
    title: 'Forum EPFL',
    tagLine: 'Une plateforme de networking professionnel reliant les étudiants EPFL aux entreprises et recruteurs.',
    description: 'Le Forum EPFL est une plateforme professionnelle innovante conçue pour créer des connexions entre les étudiants de l\'EPFL et les entreprises leaders du marché. Ce projet facilite les rencontres entre talents émergents et recruteurs, offrant aux étudiants des opportunités de stage, d\'emploi et de mentoring. La plateforme propose une expérience utilisateur optimisée avec des fonctionnalités de matching professionnel, des profils détaillés et des outils de communication directe pour favoriser les échanges constructifs et les partenariats durables.',
    images: [
      {
        src: '/img/projects/forumepfl/01.jpg',
        thumb: '/img/projects/forumepfl/01_small.jpg',
        alt: 'E-commerce homepage featuring product grid'
      },
      {
        src: '/img/projects/forumepfl/02.jpg',
        thumb: '/img/projects/forumepfl/02_small.jpg',
        alt: 'E-commerce homepage featuring product grid'
      },
       {
        src: '/img/projects/forumepfl/03.jpg',
        thumb: '/img/projects/forumepfl/03_small.jpg',
        alt: 'E-commerce homepage featuring product grid'
      },
      {
       src: '/img/projects/forumepfl/04.jpg',
        thumb: '/img/projects/forumepfl/04_small.jpg',
        alt: 'E-commerce homepage featuring product grid'
      },
       {
        src: '/img/projects/forumepfl/05.jpg',
        thumb: '/img/projects/forumepfl/05_small.jpg',
        alt: 'E-commerce homepage featuring product grid'
      },
    ],
    skills: ['Gestion de projet', 'Suivi des délais et des livrables', 'Développement front-end', 'Design UI/UX', 'Relation Client'],
    technologies: ['Wordpress', 'Sass', 'Jquery', 'PHP', 'MySQL', 'Git', 'Figma', 'Wordpress Bedrock'],
    github: 'https://github.com/username/ecommerce'
  },
  {
    id: 'epg',
    title: ' Eglise protestante de Genève',
    tagLine: 'Refonte complète du site web pour moderniser la présence digitale et l\'engagement communautaire.',
    description: 'La refonte du site de l\'Église protestante de Genève visait à moderniser sa présence digitale et à offrir une meilleure expérience utilisateur aux fidèles et visiteurs. Ce projet comprenait une complète réimagination de l\'interface, l\'optimisation de la navigation, la mise en avant des services et événements, ainsi que l\'intégration de nouvelles fonctionnalités pour favoriser l\'engagement communautaire. Le nouveau site reflète les valeurs de l\'église tout en facilitant l\'accès aux informations pastorales, aux horaires des services et aux possibilités de participation à la vie communautaire.',
    images: [
      {
        src: '/img/projects/epg/01.jpg',
        thumb: '/img/projects/epg/01_small.jpg',
        alt: 'E-commerce homepage featuring product grid'
      },
      {
        src: '/img/projects/epg/02.jpg',
        thumb: '/img/projects/epg/02_small.jpg',
        alt: 'E-commerce homepage featuring product grid'
      },
       {
        src: '/img/projects/epg/03.jpg',
        thumb: '/img/projects/epg/03_small.jpg',
        alt: 'E-commerce homepage featuring product grid'
      },
      {
       src: '/img/projects/epg/04.jpg',
        thumb: '/img/projects/epg/04_small.jpg',
        alt: 'E-commerce homepage featuring product grid'
      },
       {
        src: '/img/projects/epg/05.jpg',
        thumb: '/img/projects/epg/05_small.jpg',
        alt: 'E-commerce homepage featuring product grid'
      },
    ],
    skills: ['Gestion de projet', 'Suivi des délais et des livrables', 'Développement front-end', 'Design UI/UX'],
    technologies: ['Wordpress', 'Sass', 'Jquery', 'PHP', 'MySQL', 'Git', 'Figma', 'Wordpress Bedrock'],
    github: 'https://github.com/username/ecommerce'
  },
];

// ...existing code...

export function getProject(id: string) {
  return projects.find(project => project.id === id);
}

export function getAllProjects() {
  return projects;
}

export async function generateStaticParams() {
  const projects = getAllProjects()

  return projects.map((project) => ({
    projectId: project.id,
  }))
}