import React from 'react'
import Item from './Item'
import './ItemList.css'


const ItemList = ({ productos }) => {
    return (
        <div className="itemList__card">
            {productos.map((productos) => (
                <Item key={productos.id} productos={productos} />
            ))}
        </div>
    );
};

export default ItemList;
