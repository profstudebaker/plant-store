import Head from 'next/head'
import styled from "styled-components"

export default function Home() {
  const user = { name: "Murphy", cart: [] }

  return (
    <div>
      <Head>
        <title>Checkout</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <h1>Hey there, {user.name}! Let's get these plants headed your way.</h1>
          <CartIcon>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <p>{user.cart.length}</p>
          </CartIcon>
        </Header>
      <main>

        
      </main>
    </div>
  )
}

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 40px;
`

const CartIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  svg {
    height: 32px;
  }
`

const Gallery = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 20px;
`