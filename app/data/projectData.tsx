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
    description: 'Le rapport annuel de l\'empire est un projet d\'expérimentation autour de la visualisation de données dans l\'univers de Star Wars. Il montre les pertes subies ainsi que les personnages et espèces avec lesquelles traite l\'empire. Ce projet se présente comme un rapport diégétique qui serait présenté au sein même de l\'univers Star Wars.\n\nDans ce projet de groupe, j\'ai travaillé à la recherche des données à utiliser et la manière de les exploiter. J\'ai ensuite mené le développement du site en établissant l\'architecture du projet, et la gestion des animations.',
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
    github: 'https://github.com/username/portfolio',
    link: 'https://empire-annual-report.netlify.app/'
  },
  {
    id: 'coachlab',
    title: 'CoachLab',
    tagLine: 'Conception et mise en place d\'une campagne de communication multicanal pour promouvoir le football féminin en Suisse.',
    description: `Coachlab est une campagne de communication visant à promouvoir le football féminin en Suisse et encourager davantage de femmes à devenir entraîneuses. Le projet s'axe autour d'une identité visuelle forte, d'une plateforme pour apprendre les bases de la tactique et du coaching de manière ludique, et des solutions physiques pour atteindre les futurs coaches au bord du terrain. L'objectif est de légitimiser les femmes dans le football afin de soutenir les vocations de celles qui souhaitent s'investir comme entraîneuses.

Dans ce projet, j'ai coordonné l'équipe de développement et participé à la conception de l'identité visuelle. J'ai développé la plateforme d'apprentissage en utilisant Vue.js et Nuxt.js, en intégrant des éléments interactifs pour l'enseignement de l'arbitrage. J'ai également contribué à la stratégie de communication multicanal et au suivi des livrables du projet.`,
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
    github: 'https://github.com/username/ecommerce',
  },

  {
    id: 'terravaud',
    title: 'Terra Vaud',
    tagLine: 'Conception de développement d\'un prototype d\'application de découverte et valorisation du patrimoine vaudois.',
    description: `Terra Vaud est une application mobile conçue pour découvrir et valoriser le patrimoine culturel et naturel du canton de Vaud. L'application offre une multitude de parcours officiels, permettant aux utilisateurs d'explorer des sites historiques, des paysages naturels et des trésors cachés à travers des itinéraires thématiques. Elle offre aussi un fort aspect participatif, où les utilisateurs peuvent créer et partager leurs propres parcours, contribuant ainsi à l'enrichissement continu de la plateforme. L'application vise à promouvoir le tourisme local, encourager la découverte active et renforcer le lien entre les habitants et leur région.

    Dans ce projet, j'ai participé à la conception UX/UI de l'application, en réalisant des recherches utilisateurs et en créant des prototypes interactifs. J'ai développé et architecturé le front-end avec Vue.js et Tailwind CSS, afin qu'il coommunique efficacement avec le backend du projet. J'ai également géré la coordination d'équipe et le suivi des délais pour assurer la livraison du prototype.`,
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
    tagLine: 'Gestion du site web et participation à l\'un des plus grands événements du Nord-Vaudois.',
    description: 'Le Baleinev Festival est le festival estudiantin de la Heig-vd. Son site web doit permettre l\'accès aux informations vitales, la programmation, la billeterie. Il doit aussi représenter fidèlement la ligne graphique de l\'édition. \nDans ce projet, j\'ai géré le développement front-end du site web en utilisant WordPress et Elementor. J\'ai travaillé sur l\'optimisation des performances et la maintenance du site, en veillant à ce que le design corresponde parfaitement à l\'identité visuelle du festival. J\'ai également coordonné avec l\'équipe pour assurer le respect des délais et la qualité des livrables.',
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
    github: 'https://github.com/username/ecommerce',
    link: 'https://baleinev.ch/'
  },
  {
    id: 'liris',
    title: 'Liris',
    heroImage: 'top',
    tagLine: 'Conception et développement de A à Z du site pour une solution de gestion de cabinet ophtalmologique.',
    description: 'Liris est une solution logicielle complète conçue pour les cabinets d\'ophtalmologie, visant à simplifier la gestion des patients et des opérations quotidiennes d\'un cabinet. Le but était ici de mettre en place un site qui communique avec simplicité le fonctionnement du logiciel, et acquérir des leads potentiels.\n\n Dans ce projet, j\'ai participé à la connception UX du site et la réalisation des Wireframes. J\'ai ensuite développé le site sur Wordpress. Finalement, j\'ai mené la formation des clients pour la gestion autonome du site après livraison.',
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
    github: 'https://github.com/username/ecommerce',
    link: 'https://liris.ch/fr/'
  },
  {
    id: 'ophtalmique',
    title: 'Hôpital Ophtalmique',
    tagLine: 'Refonte de la homepage du site de l\'Hôpital ophtalmique de Lausanne pour améliorer la présence en ligne et l\'accessibilité pour les patients.',
    description: 'La refonte de la homepage de l\'Hôpital ophtalmique Jules-Gonin visait à aligner les fonctionnalités avec les besoins des visiteurs du site. La conception de nouvelles fonctionnalités devait permettre de répondre aux recherches d\'informations des utilisateurs, et aussi apporter une touche de fraicheur à la DA du site.\n\nDans ce projet, j\'ai collaboré à la conception des wireframes de la page. Puis j\'ai participé aux reviews du design. J\'ai ensuite développé et intégré les nouvelles fonctionnalités sur le site Wordpress existant. En prenant un soin particulier sur l\'accessibilité, qui était une priorité pour le client.',
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
    github: 'https://github.com/username/ecommerce',
    link: 'https://www.ophtalmique.ch/'
  },
  {
    id: 'forumepfl',
    title: 'Forum EPFL',
    tagLine: 'Création et évolution du design system de la plateforme professionnelle de networking des étudiants de l\'EPFL',
    description: 'Le forum EPFL est un salon de recrutement pour et par les étudiants de l\'EPFL. Il fonctionne avec un site front pour l\'information et l\'inscription. Mais le coeur du projet se trouve dans la plateforme d\'administration qui permet de gérer le salon chaque année. La gestion du salon par une nouvelle équipe d\'étudiants chaque année démarre un nouveau cycle d\'amélioration et développement.\n\nDans ce projet, j\'ai participé à la création et à l\'évolution du design system de la plateforme. J\'ai aussi participé à l\'intégration de vues dans le front de la plateforme.',
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
    technologies: ['Symphony', 'Sass', 'Jquery', 'PHP', 'MySQL', 'Git', 'Figma'],
    github: 'https://github.com/username/ecommerce'
  },
  {
    id: 'epg',
    title: 'Eglise protestante de Genève',
    tagLine: 'Refonte complète du site web pour moderniser la présence digitale et l\'engagement communautaire.',
    description: 'La refonte du site de l\'Église protestante de Genève visait à moderniser sa présence digitale et à offrir une meilleure expérience utilisateur aux fidèles et visiteurs. Ce projet comprenait une complète réimagination de l\'interface, l\'optimisation de la navigation, la mise en avant des services et événements, ainsi que l\'intégration de nouvelles fonctionnalités pour favoriser l\'engagement communautaire. Le nouveau site reflète les valeurs de l\'église tout en facilitant l\'accès aux informations pastorales, aux horaires des services et aux possibilités de participation à la vie communautaire.\n\nDans ce projet, j\'ai participé à la conception de l\'expérience utilisateur et des wireframes. J\'ai ensuite participé aux reviews du design. Puis lors du développement, travaillé en tandem avec un autre développeurs pour réaliser le site sur WordPress.',
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
    github: 'https://github.com/username/ecommerce',
    link: 'https://epg.ch/'
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