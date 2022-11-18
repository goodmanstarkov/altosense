'use client'

import { Input as AntInput, InputProps as AntInputProps } from 'antd'
import { clsx } from 'clsx'

export interface IInputProps extends AntInputProps {}

export const Input = (props: IInputProps) => {
  const { className } = props

  const mainClasses = clsx(
    className,
    'border',
    'border-t-0',
    'border-x-0',
    'border-b-primary',
    'rounded-none',
    'placeholder:text-primary'
  )

  return <AntInput {...props} className={mainClasses} />
}
