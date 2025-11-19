'use client'
import { useEffect, useState } from 'react'
import '../slider.scss';
import { appeals } from '@/app/data/appeals';
import { loop } from '@react-three/fiber/dist/declarations/src/core/loop';

export default function WordSlider() {
    useEffect(() => {
        const listContainer = document.querySelector('.ms-slider__words') as HTMLElement;
        let maxItemWidth = 0;
        const listItems = document.querySelectorAll('.ms-slider__word') as NodeListOf<HTMLElement>;
        const listSpans = document.querySelectorAll('.ms-slider__word span') as NodeListOf<HTMLElement>;
        const listItemtWidths: number[] = [];
        let currentMaxItemIndex = 0;

        function calculateAndSetWidth() {
            let widestItem = listItems[0];

            listSpans.forEach(item => {
                listItemtWidths.push(item.offsetWidth);
                if (item.offsetWidth > widestItem.offsetWidth) {
                    widestItem = item;
                }
            });

            maxItemWidth = widestItem.offsetWidth;
            listContainer.style.width = `${maxItemWidth}px`;
        }

        // Initial calculation
        calculateAndSetWidth();

        let currentIndex = 0;

        function slider(index: number) { // Add type annotation here
            const currentItem = listItems[index];
            listItems.forEach(element => {
                element.classList.remove('slider_out', 'slider_in');
            });
            currentItem.classList.add('slider_in');
            listContainer.style.width = `${listItemtWidths[index]}px`;

            setTimeout(() => {
                currentItem.classList.add('slider_out');
                index++;
                if (index >= listItems.length) {
                    index = 1;
                }
                slider(index); // Remove the explicit type here
            }, 2000);
        }

        slider(currentIndex);
    }, []);

    return (
        <div className="ms-header">
            <div className="ms-header__title border border-dashed border-(--foreground) rounded-md p-2">
                <div className="ms-slider">
                    <ul className="ms-slider__words font-bold">
                        {appeals.map((skill) => (
                            <li key={skill} className="ms-slider__word">
                                <span className='whitespace-nowrap'>{skill}.</span>
                            </li>
                        ))}
                        <li key={appeals[0] + '_2'} className="ms-slider__word"><span className='whitespace-nowrap'>{appeals[0]}.</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}