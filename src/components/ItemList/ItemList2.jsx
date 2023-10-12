import React from 'react'
import Item2 from '../Item/Item2'
import './ItemList.css'


const ItemList2 = ({ productos }) => {
    return (
        <div className="container-fluid"> {/*className="itemList__card"*/}
            <div className="row justify-content-center">
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
        </div>
    );
};

export default ItemList2;
