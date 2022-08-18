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
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper {...rest}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}

      <S.InputWrapper style={{ marginTop: !!label ? '8px' : 0 }}>
        <S.Input
          onChange={onChange}
          disabled={disabled}
          defaultValue={initialValue || ''}
          name={name}
          {...(label ? { id: name } : {})}
          {...rest}
        />
      </S.InputWrapper>
    </S.Wrapper>
  )
}
