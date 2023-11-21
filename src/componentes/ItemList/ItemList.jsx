import { useState } from "react"
import Item from "../Item/Item"

const ItemList = ({items}) => {
    return(
        <div className='ListGroup'>
            {items.map(prod => <Item key={prod.id} name={prod.name} price={prod.price} stock={prod.stock} />)}
        </div>
    )
}

export default ItemList