export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  tagLine: string;
  images: ProjectImage[];
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
        alt: 'Empire annual report hero section'
      },
      {
        src: '/img/projects/datavis/01.jpg',
        alt: 'Financial dashboard visualization'
      },
      {
        src: '/img/projects/datavis/04.jpg',
        alt: 'Mobile responsive view of the report'
      },
      {
        src: '/img/projects/datavis/03.jpg',
        alt: 'Mobile responsive view of the report'
      },
       {
        src: '/img/projects/datavis/05.jpg',
        alt: 'Mobile responsive view of the report'
      }
    ],
    technologies: ['Vue.js', 'Figma', 'Ui design', 'D3', 'Interaction design'],
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
        alt: 'E-commerce homepage featuring product grid'
      },
      {
        src: '/img/projects/coachlab/mockup_small.jpg',
        alt: 'Product detail page with gallery'
      },
       {
        src: '/img/projects/coachlab/27_small.jpg',
        alt: 'Product detail page with gallery'
      },
       {
        src: '/img/projects/coachlab/28_small.jpg',
        alt: 'Product detail page with gallery'
      },
       {
        src: '/img/projects/coachlab/29_small.jpg',
        alt: 'Product detail page with gallery'
      }
    ],
    technologies: ['Vue.js', 'Tailwind CSS', 'Figma', 'UI/UX Design', 'Recherche UX', 'Branding', 'Brand Design', 'Design Graphique', 'Réseaux sociaux', 'Brand strategy'],
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
        src: '/img/projects/terravaud/onboarding_small.jpg',
        alt: 'Product detail page with gallery'
      },
       {
        src: '/img/projects/terravaud/creation_parcours_small.jpg',
        alt: 'Product detail page with gallery'
      },
       {
        src: '/img/projects/terravaud/map2_small.jpg',
        alt: 'Product detail page with gallery'
      },
      {
        src: '/img/projects/terravaud/Brandboard_small.jpg',
        alt: 'Product detail page with gallery'
      },
      
    ],
    technologies: ['Vue.js', 'Tailwind CSS', 'Laravel', 'npm', 'Figma', 'Composer', 'UI/UX Design', 'Gestion de projet', 'Recherche UX', 'Développement front-end', 'Développement back-end'],
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
        alt: 'E-commerce homepage featuring product grid'
      },
      {
        src: '/img/projects/baleinev/474474932_18483635644033504_119499071726526965_n_small.jpg',
        alt: 'E-commerce homepage featuring product grid'
      },
       {
        src: '/img/projects/baleinev/mobile_small.jpg',
        alt: 'E-commerce homepage featuring product grid'
      },
       {
        src: '/img/projects/baleinev/insta_small.jpg',
        alt: 'E-commerce homepage featuring product grid'
      },
       {
        src: '/img/projects/baleinev/desktop.jpg',
        alt: 'E-commerce homepage featuring product grid'
      },
    ],
    technologies: ['Wordpress', 'Elementor', 'Docker', 'Machine virtuelle'],
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