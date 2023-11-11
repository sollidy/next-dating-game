import { useEffect, useState } from 'react'

export const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null)

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  const setThemeManual = (propTheme: 'dark' | 'light') => {
    if (propTheme === 'dark') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }
  return { theme, setTheme: setThemeManual }
}
