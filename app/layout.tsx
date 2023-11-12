'use client'

import type { Metadata, Viewport } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import Div100vh from 'react-div-100vh'
import styles from './layout.module.scss'

const nunito = Nunito()

export const metadata: Metadata = {
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
        <main className={styles.layoutBg}>
          <Div100vh>{children}</Div100vh>
        </main>
      </body>
    </html>
  )
}
