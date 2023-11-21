import React, { useState } from 'react';
const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(initial);

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    return (
        <div className="ItemCount">
            <div className="Controls">
                <button onClick={restar}>-</button>
                <span>{contador}</span>
                <button onClick={sumar}>+</button>
            </div>
            <button onClick={() => onAdd(contador)} disabled ={!stock}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount