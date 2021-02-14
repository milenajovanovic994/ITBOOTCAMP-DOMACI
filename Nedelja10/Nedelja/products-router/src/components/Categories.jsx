import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllProducts } from "../service"
import StyledDiv from "./StyledDiv"
import StyledH1 from "./StyledH1"

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getAllProducts().then(res => {
            setCategories([...new Set(res.data.map(el => el.category))])
        })
    }, [])

    return (
        <>
            <StyledH1>
                <h1>Categories</h1>
                <hr/>
            </StyledH1>
            {categories.map(category => {
                return (
                    <StyledDiv key={category}>
                        <Link to={`/categories/${category}`}>{category} </Link>
                    </StyledDiv>
                )
            })}
        </>
    )
}
export default Categories