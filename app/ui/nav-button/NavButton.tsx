import clsx from 'clsx'
import { useRouter } from 'next/router'
import { FaArrowCircleLeft, FaInfoCircle } from 'react-icons/fa'
import styles from './NavButton.module.scss'
import { NavButtonProps } from './NavButton.props'

export const NavButton = ({ icon, className, ...rest }: NavButtonProps) => {
  const { push } = useRouter()

  return (
    <div className={clsx(styles.nav, className)} {...rest}>
      {icon === 'back' ? (
        <FaArrowCircleLeft className={styles.icon} onClick={() => push('/')} />
      ) : (
        <FaInfoCircle className={styles.icon} onClick={() => push('info')} />
      )}
    </div>
  )
}
