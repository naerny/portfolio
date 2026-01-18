'use client'
import { useState, useEffect } from 'react';
import Button from "./Button";

// interface BtnProps {
//   input: string[];
// }

export default function PopUp() {
  const [isVisible, setIsVisible] = useState(true);
  const [position, setPosition] = useState('bottom-right');

  useEffect(() => {
    const dismissed = localStorage.getItem('popupDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  // useEffect(() => {
  //   const popupElement = document.querySelector('.popup') as HTMLElement;
  //   const played = localStorage.getItem('animationPlayed');
  //   if (played !== 'true') {
     
  //     // popupElement.classList.add('bottom-1/2', 'right-1/2', 'transform', 'translate-x-1/2', 'translate-y-1/2');
  //     const timer = setTimeout(() => {
      
  //       // popupElement.classList.remove('bottom-1/2', 'right-1/2', 'transform', 'translate-x-1/2', 'translate-y-1/2');
  //       // popupElement.classList.add('bottom-2', 'right-2',);
  //       localStorage.setItem('animationPlayed', 'true');
  //     }, 3000);
  //     return () => clearTimeout(timer);
  //   } else {
  //     // popupElement.classList.add('bottom-2', 'right-2',);
  //   }
  // }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('popupDismissed', 'true');
  };

  if (!isVisible) return null;

  return (

    <div className={`popup bg-linear-to-b from-(--background) via-orange-100 via-45% to-orange-300 text-(--foreground) rounded-lg p-2 max-w-[calc(100%-1rem)] md:max-w-2xl fixed shadow-lg shadow-gray-800 bottom-6 right-2 md:right-6 reveal-right`}>
      <div className='border border-dashed border-(--gray) rounded-lg p-4 flex flex-col gap-2 justify-start items-start'>
        <h2 className="h2 mb-4">Bonjour! 👋</h2>
        {/* <p className="">Bienvenue sur mon portfolio! Ce site est construit sur ReactJs et évolue au file de mon apprentissage de cette technologie.</p> */}
        <p>Ce site est développé en React.js et évolue en même temps que mes compétences.</p>
        <p>C'est un terrain d’expérimentation pour approfondir cette technologie, tester des idées, améliorer les performances et affiner l’expérience utilisateur au fil du temps.</p>
        <p>Bonne visite!</p>
        {/* <CtaBtn mailParts={input} /> */}
        <Button variant="primary" className="mt-4" onClick={handleClose}>
          Compris!
        </Button>
      </div>

      {/* <button 
          className="mt-4 px-4 py-2 bg-(--foreground) text-(--background) rounded-3xl hover:bg-(--gray) focus:ring-2 focus:ring-blue-300"
          onClick={() => {
            // Logic to close the popup
          }}
        >
          Fermer
        </button> */}

    </div>

  );
}