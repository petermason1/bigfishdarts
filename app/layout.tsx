import type { Metadata } from 'next'
import { ReactNode } from 'react'
import '../styles.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'BigFish Darts - Join the Revolution',
  description: 'Revolutionary darts gaming experience for corporate events, pub nights, and competitive play',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'BigFish Darts - Join the Revolution',
    description: 'Revolutionary darts gaming experience for corporate events, pub nights, and competitive play',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BigFish Darts',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BigFish Darts - Join the Revolution',
    description: 'Revolutionary darts gaming experience for corporate events, pub nights, and competitive play',
    images: ['/og-image.jpg'],
  },
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

