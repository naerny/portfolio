import { getProject } from '@/app/data/projectData'
import { notFound } from 'next/navigation'
import Grid from '@/app/components/Grid'
import TechStack from '@/app/components/TechStack'
import SimpleGallery from '@/app/components/SimpleGallery'
import Cta from '@/app/components/Cta'

type GridImage = {
  url: string;
  alt: string;
  title: string;
  description: string;
  slug?: string;
  canHover?: boolean;
};

export default function ProjectDetails({ params }: { params: { projectId: string } }) {
  const project = getProject(params.projectId)

  if (!project) {
    notFound()
  }

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
          <h1 className="h1">{project.title}</h1>
          <p className='text-lg'>{project.tagLine}</p>
        </div>
        <div className='w-full h-64 md:h-128 overflow-hidden rounded-lg'>
          <img
            src={project.images[0].src}
            alt={project.images[0].alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className='max-w-2xl gap-8'>
          {project.description && (
            <p dangerouslySetInnerHTML={{ __html: project.description.replace(/\n/g, '<br /><br />') }}></p>
          )}
        </div>
      </div>

      <div className="w-full max-w-7xl">
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
      </div>

      <TechStack technologies={project.technologies} />

      <Cta input={['nicolas.aerny', 'gmail.com']} />

    </article>
  )
}
