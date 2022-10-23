import '../styles/globals.css'

import { ChakraProvider, extendTheme, DarkMode } from '@chakra-ui/react'
import NextNProgress from 'nextjs-progressbar'

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: true,
  fonts: {
    heading: `'Lato', sans-serif`,
    body: `'Lato', sans-serif`,
    button: `'Lato', sans-serif`,
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <DarkMode>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </DarkMode>
    </>
  )
}

export default MyApp
