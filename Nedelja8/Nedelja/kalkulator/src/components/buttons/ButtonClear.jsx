const ButtonClear = ({ setResult, setSteps }) => {
    return (
        <>
            <button onClick={() => {
                setResult(0)
                setSteps('')
            }} >Clear</button>
        </>
    )
}
export default ButtonClear