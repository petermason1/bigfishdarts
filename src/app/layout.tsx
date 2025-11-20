import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BigFish Darts - Interactive Darts Gaming',
  description: 'Play darts with friends in real-time with live video streaming',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

