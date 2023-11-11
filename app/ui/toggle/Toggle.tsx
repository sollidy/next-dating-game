import clsx from 'clsx'
import { ChangeEvent } from 'react'
import { useThemeContext } from '../../../context/theme-context'
import styles from './Toggle.module.scss'
import { ToggleProps } from './Toggle.props'

export const Toggle = ({ ...rest }: ToggleProps) => {
  const { theme, setTheme } = useThemeContext()
  const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) setTheme('dark')
    else setTheme('light')
  }
  return (
    <div className={styles.toggleWrapper} {...rest}>
      <input
        checked={theme === 'dark'}
        type="checkbox"
        className="hidden"
        id="dn"
        onChange={handleToggle}
      />
      <label htmlFor="dn" className={styles.toggle}>
        <span className={styles.toggleHandler}>
          <span className={clsx(styles.crater, styles.crater1)}></span>
          <span className={clsx(styles.crater, styles.crater2)}></span>
          <span className={clsx(styles.crater, styles.crater3)}></span>
        </span>
        <span className={clsx(styles.star, styles.star1)}></span>
        <span className={clsx(styles.star, styles.star2)}></span>
        <span className={clsx(styles.star, styles.star3)}></span>
        <span className={clsx(styles.star, styles.star4)}></span>
        <span className={clsx(styles.star, styles.star5)}></span>
        <span className={clsx(styles.star, styles.star6)}></span>
      </label>
    </div>
  )
}
