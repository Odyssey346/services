import '../styles/globals.css'

import { ChakraProvider, extendTheme, DarkMode } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  fonts: {
    body: `'Lato', sans-serif`
  }
}

const theme = extendTheme({ config })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <DarkMode>
        <Component {...pageProps} />
      </DarkMode>
    </ChakraProvider>
  )
}

export default MyApp
