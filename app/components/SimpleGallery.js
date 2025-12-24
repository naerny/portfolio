'use client';
import GridImg from './GridImg';
import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';


export default function SimpleGallery(props) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + props.galleryID,
      children: 'a',
      showHideAnimationType: 'fade',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div
    // className="gridImg__container flex flex-wrap gap-4 w-full"
    className="gridImg__container grid md:grid-cols-3 md:grid-rows-[20rem_4rem_20rem] gap-4 w-full"
    id={props.galleryID}>
      {props.images.map((image, index) => (
        <a
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={props.galleryID + '-' + index}
          target="_blank"
          rel="noreferrer"
        >
          <div
          // className={`w-full rounded-2xl overflow-hidden relative group hover:scale-95 duration-300 ease-out ${className}`}
          className={`w-full h-full rounded-2xl overflow-hidden relative group hover:scale-95 duration-300 ease-out`}
          > 

          
          <img src={image.thumbnailURL}
          alt=""
          // className={`md:object-cover w-full h-full sepia-0 duration-300 ease-out ${canHover ? 'group-hover:sepia-30 group-hover:scale-110' : ''}`}
          className={`md:object-cover w-full h-full sepia-0 duration-300 ease-out group-hover:sepia-30 group-hover:scale-110`}
           />
           </div>
          {/* <GridImg image={leftImages[0]} className={`${heights?.leftTop}`} /> */}
        </a>
      ))}
    </div>
  );
}
