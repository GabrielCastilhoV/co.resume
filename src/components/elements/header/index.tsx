import Image from 'next/image'
import Link from 'next/link'

import { languages } from 'utils/constants'

import * as S from './styles'

export const Header = () => {
  return (
    <S.Wrapper>
      <Link href="/">
        <S.LogoContainer>
          <Image src="/icons/logo.svg" width={24} height={24} alt="copy icon" />

          <S.LogoName>CO. RESUME</S.LogoName>
        </S.LogoContainer>
      </Link>

      <S.LanguageContainer>
        <Image
          src={languages[0].image}
          width={20}
          height={20}
          alt={languages[0].name}
        />

        <S.LanguageName>{languages[0].name}</S.LanguageName>
      </S.LanguageContainer>
    </S.Wrapper>
  )
}
