import ShoppingItem from "./ShoppingItem"
import { v1 as uuidv1 } from 'uuid'


const ShoppingItems = () => {
    let shoppingItems = [
        {
            name: 'Water',
            price: 50,
            id: uuidv1()
        },
        {
            name: 'Juice',
            price: 150,
            id: uuidv1()
        },
        {
            name: 'Bread',
            price: 70,
            id: uuidv1()
        },
        {
            name: 'Pickles',
            price: 200,
            id: uuidv1()
        },
        {
            name: 'Cheese',
            price: 220,
            id: uuidv1()
        },
    ]
    return (
        shoppingItems.map(item => <ShoppingItem sItem={item} />)
    )
}

export default ShoppingItems