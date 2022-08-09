import type { InputHTMLAttributes } from 'react'

export type TextFieldProps = {
  onInputChange?: (value: string) => void
  initialValue?: string
  disabled?: boolean
  label?: string
} & InputHTMLAttributes<HTMLInputElement>
