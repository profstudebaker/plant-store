import Head from 'next/head'
import styled from "styled-components"
import Footer from '../components/Footer'
import ItemCard from '../components/ItemCard'
import useItems from '../context/ItemContext'

export default function Home() {
  const user = { name: "Murphy", cart: [] }
  const { items } = useItems()

  return (
    <PageWrapper>
      <Head>
        <title>Checkout</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <h1>Checkout</h1>
          <CartIcon>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <p>{user.cart.length}</p>
          </CartIcon>
        </Header>
      <Main>
        <Title>Welcome to your cart, {user.name}! Let's get these plants headed your way.</Title>
        <Placeholder></Placeholder>
        <h2>Want a little something extra?</h2>
        <Gallery>
            {
                items.map((plant) => 
                    <ItemCard item={plant} />
                )
            }
        </Gallery>
      </Main>
      <Footer />
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const Title = styled.h1`
    font-size: 3rem;
`

const Main = styled.main`
  padding: 20px 10%;

  h2 {
    margin: 0;
    padding: 20px 0px;
  }
`


const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 40px;
`

const Placeholder = styled.div`
    background: gray;
    height: 500px;
    border-radius: 20px;
    padding: 20px;
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 20px;
`