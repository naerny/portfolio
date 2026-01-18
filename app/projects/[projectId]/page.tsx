'use client';
import { useEffect } from 'react';
import { getProject } from '@/app/data/projectData'
import { notFound } from 'next/navigation'
import Grid from '@/app/components/Grid'
import TechStack from '@/app/components/TechStack'
import SimpleGallery from '@/app/components/SimpleGallery'
import Cta from '@/app/components/Cta'
import Button from '@/app/components/Button';

type GridImage = {
  url: string;
  alt: string;
  thumb: string;
  title: string;
  description: string;
  heroImage?: string;
  slug?: string;
  canHover?: boolean;
};

export default function ProjectDetails({ params }: { params: { projectId: string } }) {
  const project = getProject(params.projectId)

  if (!project) {
    notFound()
  }

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
      sr.reveal('.reveal-left-delay', { origin: 'left', delay: 1500 });
    });
  }, []);

  // build gridImages from the current project's images (use fallbacks if fewer than 4)
  const images = (project.images ?? []).slice(1)
  const makeImage = (idx: number) => {
    const img = images[idx]
    return {
      url: img?.src ?? '/placeholder.jpg',
      thumb: img?.thumb ?? '/placeholder_small.jpg',
      alt: img?.alt ?? 'Project preview',
      title: project.title,
      description: project.tagLine ?? project.description ?? '',
      slug: ''
    } as GridImage
  }

  const gridImages = {
    leftImages: [makeImage(0), makeImage(1)],
    rightImages: [makeImage(2), makeImage(3)]
  } as { leftImages: [GridImage, GridImage], rightImages: [GridImage, GridImage] };

  const galleryImages = [makeImage(0), makeImage(1), makeImage(2), makeImage(3)];

  return (
    <article className="flex flex-col items-center gap-16 md:gap-32 md:py-24">
      <div className='w-full flex flex-col items-center gap-8'>
        <div className='self-start w-full md:max-w-[75%] lg:max-w-[50%]'>
          <h1 className="h1 reveal">{project.title}</h1>
          <p className='text-lg reveal-delay'>{project.tagLine}</p>
        </div>
        <div className={`w-full h-64 md:h-128 overflow-hidden rounded-lg`}>
          <img
            src={project.images[0].src}
            alt={project.images[0].alt}
            className={`reveal w-full h-full object-cover ${project.heroImage ? 'object-top' : ''}`}
          />
        </div>
        <div className='max-w-2xl gap-8'>
          {project.description && (
            <p dangerouslySetInnerHTML={{ __html: project.description.replace(/\n/g, '<br /><br />') }} className='reveal'></p>
          )}
        </div>
      </div>


      <div className="w-full max-w-7xl flex flex-col justify-center items-center gap-6">
        {/* <Grid leftImages={gridImages.leftImages} rightImages={gridImages.rightImages} canHover={false} heights={{ leftTop: 'md:h-96', leftBottom: 'md:h-116', rightTop: 'md:h-72', rightBottom: 'md:h-140' }} /> */}
        <SimpleGallery
          galleryID="my-test-gallery"
          images={[
            {
              largeURL:
                galleryImages[0].url,
              thumbnailURL:
                galleryImages[0].thumb,
              width: 1200,
              height: 900,
            },
            {
              largeURL:
                galleryImages[1].url,
              thumbnailURL:
                galleryImages[1].thumb,
              width: 1200,
              height: 900,
            },
            {
              largeURL:
                galleryImages[2].url,
              thumbnailURL:
                galleryImages[2].thumb,
              width: 1200,
              height: 900,
            },
            {
              largeURL:
                galleryImages[3].url,
              thumbnailURL:
                galleryImages[3].thumb,
              width: 1200,
              height: 900,
            },
          ]}
        />

        {project.link && (
          <Button href={project.link}>Voir le projet en ligne</Button>
        )}

      </div>



      <TechStack technologies={project.technologies} skills={project.skills} />

      <Cta input={['nicolas.aerny', 'gmail.com']} />

    </article>
  )
}
