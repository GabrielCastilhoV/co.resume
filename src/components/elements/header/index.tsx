import { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

import { languages, LanguagesProps } from 'utils/constants'

import * as S from './styles'

export const Header = () => {
  const { i18n } = useTranslation()
  const { pathname, locales, locale } = useRouter()

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [activeLanguage, setActiveLanguage] = useState<LanguagesProps>(
    languages[0]
  )

  useEffect(() => {
    const activeLocale = locales?.find((item) => item === locale)
    const activeLanguage = languages.find((item) => item.code === activeLocale)

    setActiveLanguage(activeLanguage)
  }, [locale, locales])

  const handleChangeLanguage = (language: LanguagesProps) => {
    setActiveLanguage(language)
    i18n.changeLanguage(language.code)
  }

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
            src={activeLanguage.image}
            width={20}
            height={20}
            alt={activeLanguage.code}
          />

          <S.LanguageName>{activeLanguage.name}</S.LanguageName>
        </S.ActiveLanguage>

        <S.LanguageList isOpen={isOpen}>
          {languages.map((language) => (
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
