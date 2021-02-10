import { useState } from "react"
import { useHistory } from "react-router-dom"
import { getAllUsers } from "../service"
import Error from "./Error"
import StyledDiv from "./StyledDiv"
import StyledForm from "./StyledForm"

const Login = ({ setUser, setUsers, error, setError }) => {
    const [identity, setIdentity] = useState('')
    const [pass, setPass] = useState('')
    const history = useHistory()

    const isUser = (arr) => {
        return (arr.find(user => user.password === pass && (user.username === identity || user.email === identity)))
    }


    return (
        <StyledForm>
            <h1>Login</h1>
            <form onSubmit={(e) => {
                e.preventDefault()

                getAllUsers().then(res => {
                    setUsers(res.data)
                    let maybeUser = isUser(res.data)
                    if (maybeUser) {
                        setUser(maybeUser)
                        history.push('/quotes')
                    }
                    else {
                        setError('Wrong username or password!')
                    }
                })

            }}>
                <StyledDiv>
                    <label htmlFor="identity">Enter your username or email:  </label>
                    <input type="text" id="identity" placeholder="Username or Email..." onChange={(e) => setIdentity(e.target.value)} />
                </StyledDiv>
                <StyledDiv>
                    <label htmlFor="pass">Enter your password:  </label>
                    <input type="password" id="pass" placeholder="Pasword..." onChange={(e) => setPass(e.target.value)} />
                </StyledDiv>
                <StyledDiv>
                    <input type="submit" value="Login" />
                </StyledDiv>
            </form>
            <hr/>
            <StyledDiv>
                <h3>You don't have an account? Create one now!</h3>
                <button onClick={() => history.push('/register')}>Register!</button>
            </StyledDiv>
            <Error error={error} />
        </StyledForm>
    )
}
export default Login