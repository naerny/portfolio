'use client'

import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary'
}

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '',
  type = 'button',
  ...props 
}: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-3xl font-medium transition-all"
  const variants = {
    primary: "bg-(--foreground) text-white hover:bg-(--gray) hover:rounded-lg focus:ring-2 focus:ring-blue-300",
    secondary: "bg-(--background) text-(--foreground) hover:rounded-lg focus:ring-2 focus:ring-blue-300",
    tertiary: "bg-red-500 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-300"
  }

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}