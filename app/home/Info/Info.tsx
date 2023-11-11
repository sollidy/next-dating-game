import clsx from 'clsx'
import { FaGithub } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import styles from './Info.module.scss'

interface InfoProps {
  close: () => void
}

export const Info = ({ close }: InfoProps) => {
  return (
    <div className={clsx(styles.info, 'text-gray-800 dark:text-gray-100')}>
      <MdClose onClick={close} className={styles.close} />
      <div className={styles.about}>Попробуй не проиграть😀</div>
      <div className={styles.author}>
        <a
          className={clsx(styles.link)}
          href="https://github.com/m7mark"
          target="_blank"
          rel="noopener noreferrer"
        >
          @m7mark <FaGithub className="text-gray-600 dark:text-gray-500" />
        </a>
      </div>
    </div>
  )
}
