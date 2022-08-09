import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { AppLayout } from 'components/layouts'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  )
}

export default MyApp
