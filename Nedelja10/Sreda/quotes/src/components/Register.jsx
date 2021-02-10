import { useState } from "react"
import { useHistory } from "react-router-dom"
import { v1 as uuidv1 } from 'uuid'
import { getAllUsers, postUser } from "../service"
import Error from "./Error"
import StyledDiv from "./StyledDiv"
import StyledForm from "./StyledForm"

const Register = ({ setUsers, error, setError }) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const isValid = (arr) => {
        if (username.length >= 4 &&
            !arr.find(user => user.username === username || user.email === email) &&
            email.includes('@' && '.') &&
            password.length >= 8 &&
            !/^[a-zA-Z]+$/.test(password) &&
            !/^\d+$/.test(password)) {
            return true
        }

    }

    return (
        <StyledForm>
            <h1>Register</h1>
            <form onSubmit={(e) => {
                e.preventDefault()

                getAllUsers().then(res => {
                    setUsers(res.data)
                    if (isValid(res.data)) {
                        let user = {
                            id: uuidv1(),
                            username: username,
                            email: email,
                            password: password
                        }

                        postUser(user).then(res => {
                            setUsers(prev => [...prev, res.data])
                        })
                        history.push('/login')
                    }
                    else if (res.data.find(user => user.username === username || user.email === email)) {
                        setError('Username already exists or another user is already registrated using this email!')
                    }
                    else if (username.length < 4) {
                        setError('Username must include at least 4 characters!')
                    }
                    else if (!email.includes('@' && '.')) {
                        setError('Email must be valid!')
                    }
                    else if (/^[a-zA-Z]+$/.test(password) ||
                        /^\d+$/.test(password) || password.length < 8) {
                        setError('Password must include 8 characters or more, at least one number and one letter!')
                    }
                })
            }}>
                <StyledDiv>
                    <label htmlFor="username">Enter your Username:  </label>
                    <input type="text" id="username" onChange={(e) => setUsername(e.target.value)} />
                </StyledDiv>
                <StyledDiv>
                    <label htmlFor="email">Enter your Email:  </label>
                    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                </StyledDiv>
                <StyledDiv>
                    <label htmlFor="password">Set your Password:  </label>
                    <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                </StyledDiv>
                <StyledDiv>
                    <input type="submit" value="Register!" />
                </StyledDiv>
            </form>
            <Error error={error} />
        </StyledForm>
    )
}
export default Register