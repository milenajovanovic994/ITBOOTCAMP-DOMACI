import ShoppingItems from "./ShoppingItems"

const ShoppingList = ({ name }) => {
    return (
        <div>
            <h1>Shopping List for: {name}</h1>
            <ShoppingItems />
        </div>
    )
}

export default ShoppingList