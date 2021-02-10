import StyledQuote from "./StyledQuote"

const Quote = ({ quote }) => {
    return (
        <StyledQuote>
            <p>"<b>{quote.text}</b>" --- {quote.author}</p>
        </StyledQuote>
    )
}
export default Quote