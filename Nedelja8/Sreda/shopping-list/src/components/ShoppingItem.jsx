const ShoppingItem = ({ sItem }) => {
    return (
        <p key={sItem.id}>{sItem.name}: {sItem.price} RSD</p>
    )
}

export default ShoppingItem