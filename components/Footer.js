import useItems from "../context/ItemContext";
import styled from "styled-components";

export default function Footer() {
    const { items } = useItems()

    return (
        <Wrapper>
            <h3>Our Products</h3>
            <ProductList>
                {
                    items.map((i) =>
                        <li key={i.name}>{i.name}</li>
                    )
                }
            </ProductList>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    background-color: #f0f0f0;
    padding: 20px 10%;
    padding-bottom: 100px;
`

const ProductList = styled.ol`
    list-style: none;
    margin: 0;
    padding: 0;
`