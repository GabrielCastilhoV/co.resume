import { useState } from 'react'

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
  const [value, setValue] = useState(initialValue)

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
          value={value}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...rest}
        />
      </S.InputWrapper>
    </S.Wrapper>
  )
}
