import React from 'react';
import Button from '../Button';
import Link from 'next/link';
import CtaBtn from '../CtaBtn';

export default function Header() {
  return (
    <header
      className="sticky top-0 w-full flex justify-center z-50 p-4
      after:content-[''] after:absolute after:inset-0 after:backdrop-blur-md after:-z-10 after:bg-linear-to-b after:from-orange-50/[100%] after:from-0% after:via-orange-50/[50%] after:via-75%
       after:to-orange-50/[30%]
       border-b border-dashed border-(--gray)">
      <div className='flex items-center justify-between max-w-7xl w-full'>
        <Link href="/">
          <span className='text-shadow-xs text-shadow-orange-50'>Nicolas Aerny</span>
        </Link>
        <CtaBtn
          mailParts={['nicolas.aerny', 'gmail.com']}
          aria-label="Send email"
          variant='primary'
        >
        </CtaBtn>
      </div>
    </header>
  )
}