import Launch from "./Launch"

const Launches = ({ launches }) => {
    return (
        <>
            {launches.map(launch => <Launch key={launch.id} image={launch.links.patch.small} name={launch.name} />)}
        </>
    )
}
export default Launches