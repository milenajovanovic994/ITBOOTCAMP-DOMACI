import { useParams } from "react-router-dom"
import StyledDiv from "./StyledDiv"
import StyledDivOne from "./StyledDivOne"

const Category = ({ products }) => {
    let { category } = useParams()

    let productsByCategory = products.filter(product => product.category === category)

    return productsByCategory.length > 1 ? (
        <>
            {productsByCategory.map(product => <StyledDiv key={product.id}><p>{product.name} -- {product.category}</p></StyledDiv>)}
        </>
    )
        :
        (
            <>
                {productsByCategory.map(product => <StyledDivOne key={product.id}><p>{product.name} -- {product.category}</p></StyledDivOne>)}
            </>
        )
}
export default Category