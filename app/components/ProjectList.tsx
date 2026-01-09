'use client'
import { useState } from "react";
// import FsLightbox from "fslightbox-react";
import Link from 'next/link'
import GridImg from './GridImg';
import SimpleGallery from "./SimpleGallery";
import { div } from "three/tsl";

interface GridImage {
    url: string;
    alt: string;
    title: string;
    description: string;
    slug?: string;
    canHover?: boolean;
}

interface ProjectListProps {
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

export default function ProjectList({ leftImages, rightImages, canHover = true, heights }: ProjectListProps) {
    return (
        <div>
        <div className="gridImg__container flex flex-wrap gap-4 w-full">
            <div className="w-full flex gap-4 h-64">               
                <GridImg image={leftImages[0]} className="h-full" />
                <GridImg image={leftImages[1]} className="h-full" /> 
                <GridImg image={rightImages[0]} className="h-full" /> 
                <GridImg image={rightImages[1]} className="h-full" />               
            </div>            
        </div>

        <div>        
      </div>
</div>
    );
}