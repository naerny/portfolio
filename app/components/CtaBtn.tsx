'use client'
import Button from "./Button"

interface BtnProps {
   mailParts: string[];
   variant?: 'primary' | 'secondary';
}

export default function Cta({ mailParts, variant = 'secondary' }: BtnProps) {
  const email = [mailParts[0], mailParts[1]].join('@') 

  function handleMail() {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent('Project Inquiry')}`
  }

  return (
    <Button className="hover:cursor-pointer hover:scale-105" variant={variant} aria-label="Send email" onClick={handleMail}>
      Prenons contact!
    </Button>
  );
}