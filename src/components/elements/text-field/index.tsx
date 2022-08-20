import { useEffect, useState } from 'react'

import type { TextFieldProps } from './types'

import * as S from './styles'

export const TextField = ({
  onInputChange,
  initialValue = '',
  name,
  label,
  disabled = false,
  ...rest
}: TextFieldProps) => {
  const [mounted, setMounted] = useState(false)
  const [value, setValue] = useState('')

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      setValue(initialValue)
    }
  }, [mounted])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper {...rest}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}

      <S.InputWrapper style={{ marginTop: !!label ? '8px' : 0 }}>
        <S.Input
          onChange={onChange}
          disabled={disabled}
          value={value}
          name={name}
          {...(label ? { id: name } : {})}
          {...rest}
        />
      </S.InputWrapper>
    </S.Wrapper>
  )
}
