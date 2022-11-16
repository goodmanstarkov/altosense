'use client'

import { Input as AntInput, InputProps as AntInputProps } from 'antd'
import { clsx } from 'clsx'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IInputProps extends AntInputProps {}

export const Input = (props: IInputProps) => {
  const { className } = props

  const mainClasses = clsx(
    className,
    'tw-border',
    'tw-border-t-0',
    'tw-border-x-0',
    'tw-border-b-primary',
    'tw-rounded-none',
    'placeholder:tw-text-primary'
  )

  return <AntInput {...props} className={mainClasses} />
}
