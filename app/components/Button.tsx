'use client'

import { ButtonHTMLAttributes,  } from 'react'
import Link from 'next/link'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary'
  href?: string
}

// interface LinkButtonProps extends Omit<LinkProps<any>, 'children'> {
//   children: React.ReactNode
// }

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '',
  type = 'button',
  href,
  ...props 
}: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-3xl font-medium transition-all hover:cursor-pointer hover:scale-105"
  const variants = {
    primary: "bg-(--foreground) text-(--background) hover:bg-(--gray) hover:rounded-lg focus:ring-2 focus:ring-blue-300",
    secondary: "bg-stone-200 text-(--foreground) hover:bg-stone-400 hover:rounded-lg hover:text-(--background) focus:ring-2 focus:ring-blue-300",
    tertiary: "bg-red-500 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-300"
  }

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        className={buttonClasses}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  )
}