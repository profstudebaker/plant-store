import useItems from "../context/ItemContext";
import styled from "styled-components";

export default function Footer() {
    const { items } = useItems()

    return (
        <Wrapper>
            <h3>Our Products</h3>
            <ol>
                {
                    items.map((i) =>
                        <li>{i.name}</li>
                    )
                }
            </ol>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    background-color: #f0f0f0;
    padding: 20px 10%;
`