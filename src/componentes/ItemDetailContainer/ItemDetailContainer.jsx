import React, { useState, useEffect } from 'react';
import { getProductById } from '../../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Item from '../Item/Item';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const { id } = useParams();

    useEffect(() => {
        getProductById(id)
            .then((res) => {
                setItem(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;