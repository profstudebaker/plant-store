import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`


export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
        <Component {...pageProps} />
    </>
  )
}
