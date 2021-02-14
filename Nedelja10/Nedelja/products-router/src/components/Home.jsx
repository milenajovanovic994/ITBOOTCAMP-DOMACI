import { useEffect } from "react"
import { getAllProducts } from "../service"
import Products from "./Products"
import StyledH1 from "./StyledH1"

const Home = ({ setProducts, products }) => {


    useEffect(() => {
        getAllProducts().then(res => setProducts(res.data))
    }, [])

    return (
        <>
            <StyledH1>
                <h1>Home</h1>
                <hr/>
            </StyledH1>
            <Products products={products} />
        </>
    )
}
export default Home