import React from 'react'
import './globals.css'

export const metadata = {
  title: 'Spotify Tailwind',
  description: 'Listen to music.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="bg-zinc-950 text-zinc-50">{children}</body>
    </html>
  )
}
