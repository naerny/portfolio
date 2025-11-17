'use client'
import { useState } from "react";
// import FsLightbox from "fslightbox-react";
import Link from 'next/link'
import GridImg from './GridImg';

interface GridImage {
    url: string;
    alt: string;
    title: string;
    description: string;
    slug?: string;
    canHover?: boolean;
}

interface GridProps {
    leftImages: [GridImage, GridImage];
    rightImages: [GridImage, GridImage];
    canHover?: boolean;
    heights?: {
        leftTop: string;
        leftBottom: string;
        rightTop: string;
        rightBottom: string;
    };
}

export default function Grid({ leftImages, rightImages, canHover = true, heights }: GridProps) {
    return (
        <div className="gridImg__container flex flex-wrap gap-4 w-full">
            <div className="w-full md:basis-[calc(33.333%-0.5rem)] flex flex-col gap-4">               
                <GridImg image={leftImages[0]} className={`${heights?.leftTop}`} />
                <GridImg image={leftImages[1]} className={`${heights?.leftBottom}`} />               
            </div>            
            <div className="w-full md:basis-[calc(66.666%-0.5rem)] flex flex-col gap-4">
                <GridImg image={rightImages[0]} className={`${heights?.rightTop}`} />
                <GridImg image={rightImages[1]} className={`${heights?.rightBottom}`} />
            </div>
        </div>
    );
}