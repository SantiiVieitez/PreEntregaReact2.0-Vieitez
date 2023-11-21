import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ id, name, price, stock, category }) => {
  return (
    <article className="cardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <section>
        <p className="ItemPrice">${price}</p>
        <p className="ItemStock">Stock: {stock}</p>
        <p className="ItemCategory">Categoria: {category}</p>
      </section>
      <footer className="ItemFooter">
        <ItemCount stock={stock} initial={1} onAdd={(cantidad) => console.log('cantidad agregada', cantidad)} />
      </footer>
    </article>
  );
};

export default ItemDetail;