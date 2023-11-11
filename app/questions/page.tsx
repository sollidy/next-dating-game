'use client'

import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { FaAngleLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import styles from './Questions.module.scss'
import { useQuestions } from './useQuestions'
import { useKeyPress } from '@/hooks/useKeys'

export default function Questions() {
  const { num, countElements, currentQuestion, setQuestion } = useQuestions()

  const { push } = useRouter()
  useKeyPress(() => setQuestion('prev'), ['ArrowLeft'])
  useKeyPress(() => setQuestion('next'), ['ArrowRight', ' '])

  return (
    <>
      <button
        className={clsx(styles.backButton, 'bg-bgLight dark:bg-bgDark')}
        onClick={() => push('/')}
      >
        <FaAngleLeft className="text-gray-900 dark:text-gray-200" />
      </button>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.questions}
        >
          {/* <NavButton icon="back" /> */}
          <div
            className={clsx(styles.counter, 'text-gray-600 dark:text-gray-300')}
          >{`${num}/${countElements}`}</div>

          <motion.div
            layout
            key={currentQuestion}
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            className={styles.textWrapper}
          >
            <h2 className="text-black dark:text-gray-100">{currentQuestion}</h2>
          </motion.div>

          <div className={styles.buttonsWrapper}>
            <button
              className={clsx(styles.button, 'btn dark:btn-dark')}
              onClick={() => setQuestion('prev')}
              disabled={num <= 1}
            >
              <FaChevronLeft style={{ paddingRight: '4px' }} />
            </button>
            <button
              className={clsx(styles.button, 'btn dark:btn-dark')}
              onClick={() => setQuestion('next')}
              disabled={num >= countElements}
            >
              <FaChevronRight style={{ paddingLeft: '4px' }} />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}
