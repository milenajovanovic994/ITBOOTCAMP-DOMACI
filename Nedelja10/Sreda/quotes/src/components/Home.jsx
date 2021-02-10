import { Redirect } from "react-router-dom"

const Home = ({ user }) => {
    return (
        <>
            {user ? <Redirect to="/quotes" /> : <Redirect to="/login" />}
        </>
    )
}
export default Home