import React from 'react'

import "./Item.css"

const Item = ({ title, description, price, image }) => {

    return (
        <div className="col-10 col-sm-6 col-md-4 col-xl-3 p-4 d-flex align-items-stretch">
            <div className="productos-card">
                <img src={image} className="img-fluid" />
                <div className="productos-cardDatos">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">${price}</p>
                    <button className="btnAgregar">Ver mas</button>
                </div>
            </div>
        </div>
    );
};

export default Item
