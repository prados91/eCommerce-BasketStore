import React from 'react'

import "./ItemList.css"

const Item = ({ productos }) => {
    return (
        <div>
            <div className="item__container">
                <div className="item__picture">
                    IMAGEN
                </div>
                <div className="item__details">
                    <h3>{productos.name}</h3>
                    <p>Precio: ${productos.precio}</p>
                    <p>Disponibles: {productos.stock} u.</p>
                </div>
                <div>
                    <button>Ver más</button>
                </div>
            </div>

            <div className="col-10 col-sm-6 col-md-4 col-xl-3 p-4 d-flex align-items-stretch">
                <div className="productos-card">
                    IMAGEN
                    <div className="productos-cardDatos">
                        <h5 className="card-title">{productos.name}</h5>
                        <p className="card-text">${productos.precio}</p>
                        <button className="btnAgregar">Ver mas</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item