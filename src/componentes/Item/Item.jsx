import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, name, price, category, stock }) => {
    return (
      <article className="cardItem">
        <header className="Header">
          <h2 className="ItemHeader">{name}</h2>
        </header>
        <div className="ItemBody">
          <p className="ItemPrice">${price}</p>
          <p className="ItemStock">Stock: {stock}</p>
          <p className="ItemCategory">Categoria: {category}</p>
        </div>
        <footer className="ItemFooter">
          <Link to={`/item/${id}`} className="Option">
            Ver detalle
          </Link>
        </footer>
      </article>
    );
  };
  
  export default Item;
