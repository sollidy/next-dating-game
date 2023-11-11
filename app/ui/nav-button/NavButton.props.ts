import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface NavButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  icon: 'back' | 'info'
}
