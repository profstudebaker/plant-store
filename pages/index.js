import Head from 'next/head'
import Link from 'next/link'
import styled from "styled-components"
import Banner from '../components/Banner'
import ItemCard from '../components/ItemCard'
import useItems from '../context/ItemContext'

export default function Home() {
  const { items: plants, setItems } = useItems()
  const user = { name: "Murphy", cart: [] }

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Header>
        <h1>Hey there, {user.name}</h1>
        <Link href="/cart" >
          <CartIcon>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <p>{user.cart.length}</p>
          </CartIcon>
        </Link>
        </Header>
      <main>

        <Gallery>
          {
          plants.map((plant, i) => (
            <ItemCard 
              key={plant.name}
              item={plant}
            />
          ))
          }
        </Gallery>
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