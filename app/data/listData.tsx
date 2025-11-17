export interface BaseItem {
  title: string;
  subtitle: string;
  location: string;
  period: string;
}

export interface Education extends BaseItem {
  type: 'education';
  school: string;
}

export interface Work extends BaseItem {
  type: 'work';
  company: string;
  technologies?: string[];
}

type ListItem = Education | Work;

export const listData: ListItem[] = [
  {
    type: 'education',
    title: "Certificat fédéral de capacité",
    subtitle: "Concepteur en multimédia",
    school: "Eracom",
    location: "Lausanne, VD",
    period: "2014 - 2018"
  },
  {
    type: 'education',
    title: "Bachelor",
    subtitle: "Ingénierie des médias",
    school: "HEIG-VD",
    location: "Yverdon, VD",
    period: "2022 - 2025"
  },
  {
    type: 'work',
    title: "",
    subtitle: "Développeur Frontend et UX designer",
    company: "8bitstudio",
    location: "Lausanne, VD",
    period: "2018 - 2022",
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind']
  }
];