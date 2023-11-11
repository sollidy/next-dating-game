'use client'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaInfo } from 'react-icons/fa'
import friends from '@/assets/imgs/friends.svg'
import { Info } from './Info/Info'
import styles from './Start.module.scss'
import Image from 'next/image'

import { AnimatePresence } from 'framer-motion'
import { useKeyPress } from '@/hooks/useKeys'

export const Start = () => {
  const { push } = useRouter()

  useKeyPress(() => push('questions'), ['Enter'])
  const [showInfo, setShowInfo] = useState<boolean>(false)

  return (
    <>
      <button
        className={clsx(styles.infoButton, 'bg-bgLight dark:bg-bgDark', [
          showInfo && styles.infoButtonActive,
        ])}
        onClick={() => !showInfo && setShowInfo(true)}
      >
        <FaInfo className="text-gray-900 dark:text-gray-200" />
      </button>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.start}
        >
          <AnimatePresence>
            {showInfo && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.infoWrapper}
              >
                <Info close={() => setShowInfo(false)} />
              </motion.div>
            )}
          </AnimatePresence>

          <Image
            className="relative mt-4 sm:hidden"
            src={friends}
            alt="Logo"
            width={300}
            height={217}
            priority
            draggable={false}
            style={{ width: 'auto', height: 'auto' }}
          />
          <div className="text-black dark:text-white">
            <h2>Матрёшка</h2>
          </div>
          <button
            className={clsx(
              styles.startBtn,
              'bg-viola-400 dark:bg-viola-300 text-white dark:text-black',
            )}
            onClick={() => push('questions')}
          >
            Играть
          </button>
        </motion.div>
      </AnimatePresence>
    </>
  )
}
