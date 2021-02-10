import { useEffect } from "react"
import { Link } from "react-router-dom"
import { getAllQuotes } from "../service"
import Quote from "../Quote/Quote"

const Quotes = ({ user, quotes, setQuotes }) => {

    useEffect(() => {
        getAllQuotes().then(res => setQuotes(res.data))
    }, [])



    return user ?
        (
            <>
                {quotes.map(quote => <Quote key={quote.id} quote={quote} />)}
            </>
        )
        :
        (
            <>
                <h3>Morate biti ulogovani da biste videli ovu stranicu!</h3>
                <Link to="/login">Login</Link>
            </>
        )
}
export default Quotes