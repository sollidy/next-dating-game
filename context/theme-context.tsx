import { createContext, PropsWithChildren, useContext } from 'react'
import { useTheme } from '../hooks/useTheme'

type State = {
  theme: 'light' | 'dark' | null
  setTheme: (propTheme: 'light' | 'dark') => void
}

const ThemeStateContext = createContext<State | undefined>(undefined)

function ThemeProvider({ children }: PropsWithChildren) {
  const { theme, setTheme } = useTheme()
  return (
    <ThemeStateContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeStateContext.Provider>
  )
}

function useThemeContext(): State {
  const context = useContext(ThemeStateContext)
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeStateContext')
  }
  return context
}

export { ThemeProvider, useThemeContext }
