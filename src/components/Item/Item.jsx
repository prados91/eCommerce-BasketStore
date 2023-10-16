import React from 'react'

import "./Item.css"

const Item = ({ title, description, price, image }) => {

    return (
        <div className="col-10 col-sm-6 col-md-4 col-xl-3 p-4 d-flex align-items-stretch">
            <div className="item__card">
                <img src={image} className="img-fluid" />
                <div className="item__card--data">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">${price}</p>
                    <button className="item__button--more">Ver mas</button>
                </div>
            </div>
        </div>
    );
};

export default Item
