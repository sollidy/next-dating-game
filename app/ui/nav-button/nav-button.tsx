import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { FaArrowCircleLeft, FaInfoCircle } from 'react-icons/fa'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface NavButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  icon: 'back' | 'info'
}

export const NavButton = ({ icon, className, ...rest }: NavButtonProps) => {
  const { push } = useRouter()

  return (
    <div className={clsx('absolute left-6 top-6', className)} {...rest}>
      {icon === 'back' ? (
        <FaArrowCircleLeft
          className="fill-hover text-4xl"
          onClick={() => push('/')}
        />
      ) : (
        <FaInfoCircle
          className="fill-hover text-4xl"
          onClick={() => push('info')}
        />
      )}
    </div>
  )
}
