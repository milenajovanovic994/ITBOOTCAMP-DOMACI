const ButtonAdd = ({ setResult, setSteps, number, setNumber }) => {
    return (
        <>
            <button onClick={() => {
                setResult(prev => prev + Number(number))
                setSteps(prev => prev + `+ ${number}`)
                setNumber('')
            }} >+</button>
        </>
    )
}
export default ButtonAdd