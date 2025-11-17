import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects - Nicolas Aerny',
  description: 'Portfolio of my web development projects',
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex flex-col gap-8 p-4">
        {children}
      </div>
    </div>
  )
}