const Launch = ({ image, name }) => {
    return (
        <>
            <h3>{name}</h3>
            <img src={image} alt={`${name}'s preview`} />
            <hr/>
        </>
    )
}
export default Launch