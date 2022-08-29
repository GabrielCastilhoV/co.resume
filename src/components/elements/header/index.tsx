import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'
import { useLanguage } from 'hooks'

export const Header = () => {
  const { activeLanguage, languages, handleChangeLanguage, pathname } =
    useLanguage()

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <S.Wrapper>
      <Link href="/">
        <S.LogoContainer>
          <Image src="/icons/logo.svg" width={24} height={24} alt="copy icon" />

          <S.LogoName>CO. RESUME</S.LogoName>
        </S.LogoContainer>
      </Link>

      <S.LanguageContainer onClick={() => setIsOpen(!isOpen)}>
        <S.ActiveLanguage>
          <Image
            src={activeLanguage?.image}
            width={20}
            height={20}
            alt={activeLanguage?.code}
          />

          <S.LanguageName>{activeLanguage?.name}</S.LanguageName>
        </S.ActiveLanguage>

        <S.LanguageList isOpen={isOpen}>
          {languages?.length > 0 &&
            languages?.map((language) => (
              <Link
                key={language.code}
                href={`${pathname}${language.code}`}
                locale={language.code}
              >
                <S.LanguageItem onClick={() => handleChangeLanguage(language)}>
                  <Image
                    src={language.image}
                    width={16}
                    height={16}
                    alt={language.code}
                  />

                  <S.LanguageName>{language.code}</S.LanguageName>
                </S.LanguageItem>
              </Link>
            ))}
        </S.LanguageList>
      </S.LanguageContainer>
    </S.Wrapper>
  )
}
