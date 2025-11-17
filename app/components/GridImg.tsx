'use client';
import Link from "next/link";
import Image from 'next/image'

interface GridImage {
    url: string;
    alt: string;
    title: string;
    description: string;
    slug?: string;
    height?: string;
    canHover?: boolean;
}

interface GridImgProps {
    image: GridImage;
    className?: string;
}

export default function GridImg({ image, className= "" }: GridImgProps) {
     const canHover = Boolean(image.slug);
    const halfHeight = image.height ? Math.floor(parseInt(image.height) / 4) : 0;
    const Content = () => (
         <div 
            className={`w-full rounded-2xl overflow-hidden relative ${canHover ? 'group hover:scale-95' : ''} duration-300 ease-out ${className}`}
        >
            <Image
                className={`md:object-cover w-full h-full sepia-0 duration-300 ease-out ${canHover ? 'group-hover:sepia-30 group-hover:scale-110' : ''}`}
                src={image.url}
                alt={image.alt}
                quality={100}
                width={100}
                height={100}
                sizes="(max-width: 768px) 100vw, 1200px"
                // style={{ position: 'relative' }}
            />
              {canHover && (
                <div className="relative md:absolute bottom-0 left-0 w-full p-4 md:translate-y-full group-hover:translate-y-0 duration-300 delay-150 ease-out md:bg-(--foreground)/[70%] md:text-[color:var(--background)] border border-t-0 border-dashed rounded-b-2xl">
                    <p className="h3">{image.title}</p>
                    <p>{image.description}</p>
                </div>
            )}
        </div>
    );

    <style>
        
    </style>

    return image.slug ? (
        <Link href={`/projects/${image.slug}`}>
            <Content />
        </Link>
    ) : (
        <div className="pointer-events-none">
            <Content />
        </div>
    );
}