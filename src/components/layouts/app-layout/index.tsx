import { Header } from 'components/elements'

import * as S from './styles'

export const AppLayout = ({ children }) => {
  return (
    <S.Wrapper>
      <Header />

      {children}
    </S.Wrapper>
  )
}
