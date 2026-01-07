import Image from "next/image";
import Header from "./components/layout/Header";
import Profile from "./components/Profile";
import Footer from "./components/layout/Footer";
import Hero from "./components/Hero";
import Button from "./components/Button";
import WordCloud from "./components/WordCloud";
import Grid from "./components/Grid";
import List from "./components/List";
import Cta from "./components/Cta";
import Other from "./components/Other";
import { projects } from './data/projectData'

type GridImage = {
  url: string;
  alt: string;
  title: string;
  description: string;
  slug?: string;
  canHover?: boolean;
};

const gridImages = {
  leftImages: [
    {
      url: projects[0].images[0].src,
      alt: projects[0].images[0].alt,
      title: projects[0].title,
      description: projects[0].tagLine,
      slug: projects[0].id
    } as GridImage,
    {
      url: projects[1].images[0].src,
      alt: projects[1].images[0].alt,
      title: projects[1].title,
      description: projects[1].tagLine,
      slug: projects[1].id
    } as GridImage
  ],
  rightImages: [
    {
      url: projects[2]?.images[0]?.src || '/placeholder.jpg',
      alt: projects[2]?.images[0]?.alt || 'Project preview',
      title: projects[2]?.title || 'Coming soon',
      description: projects[2]?.tagLine || 'Project in development',
      slug: projects[2]?.id || ''
    } as GridImage,
    {
      url: projects[3]?.images[0]?.src || '/placeholder.jpg',
      alt: projects[3]?.images[0]?.alt || 'Project preview',
      title: projects[3]?.title || 'Coming soon',
      description: projects[3]?.tagLine || 'Project in development',
      slug: projects[3]?.id || ''
    } as GridImage,
  ],
} as { leftImages: [GridImage, GridImage], rightImages: [GridImage, GridImage] };


export default function Home() {

  const words = [
    { text: 'React', value: 100 },
    { text: 'Next.js', value: 80 },
    { text: 'TypeScript', value: 70 },
    { text: 'Development', value: 60 },
    { text: 'Web', value: 50 },
    { text: 'Programming', value: 45 },
    { text: 'Frontend', value: 40 },
    { text: 'Framework', value: 35 }
  ];
  console.log('gridImages:', gridImages);
  return (

    <main className="flex flex-col gap-16 md:gap-32 md:py-24 row-start-2 md:items-center sm:items-start">
      <Hero />

     <div className="w-full">
      <h2 className="h2">Compétences</h2>
      {/* <WordCloud /> */}
     </div>
      
      <div className="w-full">
        <h2 className="h2">Quelques projets</h2>
        <Grid leftImages={gridImages.leftImages} rightImages={gridImages.rightImages} heights={{ leftTop: 'md:h-116', leftBottom: 'md:h-96', rightTop: 'md:h-96', rightBottom: 'md:h-116' }} />
      </div>
      <List />
      {/* <div className="w-full">
        <h2 className="h2 md:text-right">Ça fait quoi un ingénieur des médias?</h2>
        <App />
      </div> */}
      <Other />
      <Cta input={['nicolas.aerny', 'gmail.com']} />
    </main>

  );
}


