import React, { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

    asyncFunc(categoryId)
        .then(res => {
            setItems(res)
        })
        .catch(err => {
            console.log(err)
        })  
    }, [categoryId])
    
        
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer