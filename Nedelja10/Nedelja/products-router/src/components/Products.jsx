import StyledDiv from "./StyledDiv"

const Products = ({ products }) => {
    return (
        <StyledDiv>
            {products.map(product => <p key={product.id}>{product.name} --- {product.category}</p>)}
        </StyledDiv>
    )
}
export default Products