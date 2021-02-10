import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { v1 as uuidv1 } from 'uuid'
import { postQuote } from "../service"
import StyledDiv from "./StyledDiv"
import StyledForm from "./StyledForm"

const CreateQuote = ({ setQuotes, user }) => {
    const [text, setText] = useState('')
    const [author, setAuthor] = useState('')
    const history = useHistory()

    return user ? (
        <StyledForm>
            <form onSubmit={(e) => {
                e.preventDefault()

                let newQuote = {
                    id: uuidv1(),
                    text: text,
                    author: author
                }
                postQuote(newQuote).then(res => {
                    setQuotes(prev => [...prev, res.data])
                })
                history.push('/quotes')
            }}>
                <h1>Create a quote</h1>
                <StyledDiv>
                    <label htmlFor="text">Write a quote: </label>
                    <input type="text" id="text" placeholder="Write a quote..." onChange={(e) => setText(e.target.value)} />
                </StyledDiv>
                <StyledDiv>
                    <label htmlFor="author">Name the author: </label>
                    <input type="text" id="author" placeholder="Author's name..." onChange={(e) => setAuthor(e.target.value)} />
                </StyledDiv>
                <StyledDiv>
                    <input type="submit" value="Add quote!" />
                </StyledDiv>
            </form>
        </StyledForm>
    )
        :
        (
            <>
                <h3>Morate biti ulogovani da biste videli ovu stranicu!</h3>
                <Link to="/login">Login</Link>
            </>
        )
}
export default CreateQuote