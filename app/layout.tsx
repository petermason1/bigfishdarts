import type { Metadata } from 'next'
import { ReactNode } from 'react'
import '../styles.css'

export const metadata: Metadata = {
  title: 'BigFish Darts - Join the Revolution',
  description: 'Revolutionary darts gaming experience for corporate events, pub nights, and competitive play',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

