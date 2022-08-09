import type { FieldsetProps } from './types'

import * as S from './styles'

export const Fieldset = ({ children, legend }: FieldsetProps) => {
  return (
    <S.Wrapper>
      <S.Legend>{legend}</S.Legend>

      {children}
    </S.Wrapper>
  )
}
