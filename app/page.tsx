
'use client';
import { useEffect } from 'react';
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import List from "./components/List";
import Cta from "./components/Cta";
import Other from "./components/Other";
import ProjectList from "./components/ProjectList";
import { projects } from './data/projectData'
import PopUp from './components/PopUp';

type GridImage = {
  url: string;
  alt: string;
  title: string;
  heroImage?: string;
  description: string;
  slug?: string;
  canHover?: boolean;
};

const academicProjects = {
  leftImages: [
    {
      url: projects[0].images[0].src,
      alt: projects[0].images[0].alt,
      title: projects[0].title,
      heroImage: projects[0].heroImage,
      description: projects[0].tagLine,
      slug: projects[0].id
    } as GridImage,
    {
      url: projects[1].images[0].src,
      alt: projects[1].images[0].alt,
      title: projects[1].title,
      heroImage: projects[1].heroImage,
      description: projects[1].tagLine,
      slug: projects[1].id
    } as GridImage
  ],
  rightImages: [
    {
      url: projects[2]?.images[0]?.src || '/placeholder.jpg',
      alt: projects[2]?.images[0]?.alt || 'Project preview',
      title: projects[2]?.title || 'Coming soon',
      heroImage: projects[2]?.heroImage,
      description: projects[2]?.tagLine || 'Project in development',
      slug: projects[2]?.id || ''
    } as GridImage,
    {
      url: projects[3]?.images[0]?.src || '/placeholder.jpg',
      alt: projects[3]?.images[0]?.alt || 'Project preview',
      title: projects[3]?.title || 'Coming soon',
      heroImage: projects[3]?.heroImage,
      description: projects[3]?.tagLine || 'Project in development',
      slug: projects[3]?.id || ''
    } as GridImage,
  ],
} as { leftImages: [GridImage, GridImage], rightImages: [GridImage, GridImage] };

const profProjects = {
  leftImages: [
    {
      url: projects[5].images[0].src,
      alt: projects[5].images[0].alt,
      title: projects[5].title,
      description: projects[5].tagLine,
      slug: projects[5].id
    } as GridImage,
    {
      url: projects[6].images[0].src,
      alt: projects[6].images[0].alt,
      title: projects[6].title,
      description: projects[6].tagLine,
      slug: projects[6].id
    } as GridImage
  ],
  rightImages: [
    {
      url: projects[4]?.images[0]?.src || '/placeholder.jpg',
      alt: projects[4]?.images[0]?.alt || 'Project preview',
      title: projects[4]?.title || 'Coming soon',
      heroImage: projects[4]?.heroImage,
      description: projects[4]?.tagLine || 'Project in development',
      slug: projects[4]?.id || ''
    } as GridImage,
    {
      url: projects[7]?.images[0]?.src || '/placeholder.jpg',
      alt: projects[7]?.images[0]?.alt || 'Project preview',
      title: projects[7]?.title || 'Coming soon',
      description: projects[7]?.tagLine || 'Project in development',
      slug: projects[7]?.id || ''
    } as GridImage,
  ],
} as { leftImages: [GridImage, GridImage], rightImages: [GridImage, GridImage] };


export default function Home() {
   useEffect(() => {
    // Dynamically import ScrollReveal only on client side
    import('scrollreveal').then((ScrollReveal) => {
      const sr = ScrollReveal.default({
        reset: false,
        distance: '30px',
        duration: 850,
        delay: 1000
      });

      // Reveal elements with a class
      sr.reveal('.reveal', { origin: 'bottom' });
      // sr.reveal('.reveal-delay', { origin: 'left', delay: 400 });
      sr.reveal('.reveal-delay', { origin: 'bottom', delay: 2000 });
      sr.reveal('.reveal-left', { origin: 'left', delay: 500 });
      sr.reveal('.reveal-right', { origin: 'top', duration: 1500, delay: 2000, distance: '150px', scale: 2 });
    });
  }, []);

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
  
  return (

    <main className="flex flex-col gap-16 md:gap-32 md:py-24 row-start-2 md:items-center sm:items-start">
      <Hero />

     <div className="w-full">
      {/* <h2 className="h2">Compétences</h2>
      <WordCloud /> */}
     </div>
      
      <div className="w-full grid-item">
        <h2 className="h2 reveal-left">Projets professionnels</h2>
        <Grid leftImages={profProjects.leftImages} rightImages={profProjects.rightImages} heights={{ leftTop: 'md:h-116', leftBottom: 'md:h-96', rightTop: 'md:h-96', rightBottom: 'md:h-116' }} />
      </div>
      
       <div className="w-full">
        <h2 className="h2 reveal-left">Projets académiques</h2>
        <ProjectList leftImages={academicProjects.leftImages} rightImages={academicProjects.rightImages} heights={{ leftTop: 'md:h-116', leftBottom: 'md:h-96', rightTop: 'md:h-96', rightBottom: 'md:h-116' }} />
      </div>

      <List />
      
      {/* <div className="w-full">
        <h2 className="h2 md:text-right">Ça fait quoi un ingénieur des médias?</h2>
        <App />
      </div> */}
      {/* <Other /> */}
      <Cta input={['nicolas.aerny', 'gmail.com']} />
      <PopUp />
    </main>

  );
}


