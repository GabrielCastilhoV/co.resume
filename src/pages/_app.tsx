import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from 'styled-components'

import { LanguageProvider, ResumeProvider } from 'hooks'

import { DefaultSeo } from 'next-seo'
import { defaultConfig } from '../../next-seo.config'

import { AppLayout } from 'components/layouts'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import 'antd/dist/antd.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <ResumeProvider>
          <DefaultSeo {...defaultConfig} />
          <GlobalStyles />

          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </ResumeProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
