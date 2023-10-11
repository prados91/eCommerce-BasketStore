import React from 'react'
import Item2 from './Item'
import './ItemList.css'


const ItemList2 = ({ productos }) => {
    return (
        <div className="itemList__container">
            {productos.map((p) => (
                <Item2 
                    key = {p.id}
                    title = {p.title}
                    description = {p.description}
                    price = {p.price}
                    image = {p.image}
                />
            ))}
        </div>
    );
};

export default ItemList2;
