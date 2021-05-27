import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'styles/theme'
import { SidebarDrawerProvider } from 'context/SidebarDrawerContext'
import { makeServer } from 'services/mirage'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bye Bills !</title>
        <link rel="shortcut icon" href="/img/brain-logo.png" />
        <link rel="apple-touch-icon" href="/img/brain-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Project for manager your bills" />
      </Head>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
    </>
  )
}

export default App
