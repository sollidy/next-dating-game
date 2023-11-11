import Head from 'next/head'
import { FC } from 'react'
import { useThemeContext } from '../../../context/theme-context'

export const HeaderSeo: FC = () => {
  const { theme } = useThemeContext()

  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5"
      />
      <title itemProp="headline">Вопросы на знакомство</title>
      <meta
        itemProp="description"
        name="description"
        content="Вопросы на знакомство. Игра для небольшой компании"
      />
      {/* <link rel="canonical" href={HOME_URL} /> */}
      <meta property="og:locale" content="ru" />
      <meta property="og:title" content="Вопросы на знакомство" />
      {/* <meta property="og:url" content={HOME_URL} /> */}
      {/* <meta property="og:image" content={logoImage} /> */}
      <meta property="og:site_name" content="Questions Game" />
      <meta
        property="og:description"
        content="Вопросы на знакомство. Игра для небольшой компании"
      />
      {theme === 'dark' ? (
        <>
          <meta name="msapplication-TileColor" content="#151419" />
          <meta name="theme-color" content={'#151419'} />
          <meta name="msapplication-navbutton-color" content={'#151419'} />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content={'#151419'}
          />
        </>
      ) : (
        <>
          <meta name="msapplication-TileColor" content="#fafafa" />
          <meta name="theme-color" content={'#fafafa'} />
          <meta name="msapplication-navbutton-color" content={'#fafafa'} />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content={'#fafafa'}
          />
        </>
      )}
    </Head>
  )
}
