'use client';
import React, { useState } from 'react';
import FsLightbox from "fslightbox-react";

function FsLightBox() {
    const [toggler, setToggler] = useState(false);
    const [slideIndex, setSlideIndex] = useState(-1);
    
    // Your array of image sources
    const images = [
        '/img/projects/terravaud/cover.jpg',
        '/img/projects/terravaud/onboarding.jpg',
        '/img/projects/terravaud/map2.jpg',
        // Add more images as needed
    ];

    // Handle individual image clicks
    const handleClick = (index) => {
        setSlideIndex(index);
        setToggler(true);
    };

    return (
        <div className="gallery-container">
            {/* Grid of clickable thumbnails */}
            <div className="image-grid">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Gallery image ${index + 1}`}
                        onClick={() => handleClick(index)}
                        className="gallery-image"
                    />
                ))}
            </div>

            {/* Lightbox component */}
            <FsLightbox
                toggler={toggler}
                sources={images}
                slide={slideIndex}
                onSlideStart={(index) => {
                    console.log(`Showing slide ${index}`);
                    setSlideIndex(index);
                }}
                onClose={() => setToggler(false)}
            />
        </div>
    );
}

export default FsLightBox;