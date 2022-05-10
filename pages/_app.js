import { createGlobalStyle } from 'styled-components'
import data from '../lib/data'
import { useState } from "react"
import { ItemContext } from "../context/ItemContext"
import { UserContext } from '../context/UserContext'

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
  #__next, html, body {
    height: 100%;
  }
`


export default function App({ Component, pageProps }) {
  const [items, setItems] = useState(data)
  const [user, setUser] = useState({
    name: "Murphy",
    cart: []
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ItemContext.Provider value={{ items, setItems }}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ItemContext.Provider>
    </UserContext.Provider>
  )
}
