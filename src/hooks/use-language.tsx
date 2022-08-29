import { createContext, useState, useEffect, useContext } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import { languages, LanguagesProps } from 'utils/constants'

export type LanguageContextData = {
  activeLanguage: LanguagesProps
  languages: LanguagesProps[]
  pathname: string
  handleChangeLanguage: (language: LanguagesProps) => void
}

export type LanguageProviderProps = {
  children: React.ReactNode
}

export const LanguageContextDataDefaultValues: LanguageContextData = {
  activeLanguage: languages[0],
  languages: languages,
  pathname: '',
  handleChangeLanguage: () => {}
}

export const LanguageContext = createContext<LanguageContextData>(
  LanguageContextDataDefaultValues
)

const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const { i18n } = useTranslation()
  const { pathname, locales, locale } = useRouter()

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
    <LanguageContext.Provider
      value={{
        activeLanguage,
        languages,
        pathname,
        handleChangeLanguage
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

const useLanguage = () => useContext(LanguageContext)

export { LanguageProvider, useLanguage }
