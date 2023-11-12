'use client'
import Div100vh from 'react-div-100vh'
import styles from './layout-client.module.scss'

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className={styles.layoutBg}>
      <Div100vh>{children}</Div100vh>
    </main>
  )
}
