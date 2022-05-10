import styled from "styled-components"

export default function ItemCard({ item, addToCart }) {
    return <Card>
        <div className="img-wrapper">
            <img src={item.img} alt={item.name} />
        </div>
        <div className="content">
        <h2 className="plant-name">{item.name}</h2>
        <p className="price">${item.price}</p>
        <AddToCart onClick={() => addToCart(item)} className={item.stock <= 0 ? 'disabled' : ''}>Add to Cart</AddToCart>
        </div>
    </Card>
}

const Card = styled.article`
    flex: 1;
    overflow: hidden;
    min-width: 300px;
    border-radius: 20px;
    border: 3px solid #81b29a;
    
    .img-wrapper {
        overflow: hidden;
        max-height: 370px;
    }
    .img-wrapper img {
    display: block;
    overflow: hidden;
    height: 30%;
    width: 100%;
    object-fit: contain;
  }
  .content {
    padding: 20px;
    background-color: white;
  }
  
  .plant-name {
    padding: 0;
    font-size: 2rem;
    margin: 0;
  }
  
  .price {
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
    padding-bottom: 20px;
  }
  
`

const AddToCart = styled.button`
    width: 100%;
    padding: 15px 0;
    color: white;
    font-weight: 700;
    background-color: #81b29a;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        filter: #81b29a; 
    }
`