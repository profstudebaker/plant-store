import useItems from "../context/ItemContext"
import styled from "styled-components"

export default function Banner() {
    const { items, setItems } = useItems()
    return <BannerWrapper>
        <p onClick={() => setItems([{
            name: "something silly",
            price: 0,
            img: "",
            alt: "",
            stock: 10
        }])}>We've got {items.length} different plants in stock!</p>
    </BannerWrapper>
}

const BannerWrapper = styled.div`
    background-color: black;
    color: white;
    text-align: center;
    margin: 0;
    padding: 1px;
`