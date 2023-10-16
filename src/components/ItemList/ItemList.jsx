import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'


const ItemList = ({ productos }) => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                {
                    productos.map((p) => {
                        return (
                            <Item
                                key={p.id}
                                id={p.id}
                                title={p.title}
                                description={p.description}
                                price={p.price}
                                image={p.image}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ItemList;
