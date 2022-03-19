import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/globalStyle';
import { theme } from '../tailwind.config';
import '../styles/globals.css';


export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
