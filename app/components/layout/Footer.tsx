import React from 'react'
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex gap-6 justify-center flex-col md:flex-row items-center p-8 w-full border-t border-dashed border-(--gray) text-(--gray)">
      <p>Nicolas Aerny @{year}</p>
      <a
        className="flex items-center gap-1 hover:underline hover:underline-offset-4"
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/envelope.svg"
          alt="envelope icon"
          width={16}
          height={16}
        />
        Contactez-moi
      </a>
      <a
        className="flex items-center gap-1 hover:underline hover:underline-offset-4"
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/linkedin.svg"
          alt="linkedin icon"
          width={16}
          height={16}
        />
        LinkedIn
      </a>
      {/* <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Go to nextjs.org →
      </a> */}
    </footer>
  )
}