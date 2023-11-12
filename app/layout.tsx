import type { Metadata, Viewport } from 'next'
import { Nunito } from 'next/font/google'
import './globals.scss'
import { LayoutClient } from '@/components'

const nunito = Nunito({ subsets: ['cyrillic'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://questions-game-beta.vercel.app/'),
  title: 'Вопросы на знакомство',
  description: 'Вопросы на знакомство. Игра для небольшой компании',
  openGraph: {
    type: 'website',
    title: 'Вопросы на знакомство',
    description: 'Вопросы на знакомство. Игра для небольшой компании',
    locale: 'ru',
  },
}
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#151419' },
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={nunito.className}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
}
