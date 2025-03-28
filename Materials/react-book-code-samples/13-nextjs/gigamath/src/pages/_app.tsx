import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { appWithTranslation } from 'next-i18next'

function App({ Component, pageProps }: AppProps) {
  return <SessionProvider session={pageProps.session}>
    <Component {...pageProps} />
  </SessionProvider>
}

export default appWithTranslation(App);