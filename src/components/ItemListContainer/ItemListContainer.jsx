import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import Loading from '../Loading/Loading'

import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

import { useParams } from 'react-router-dom'

import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {

    const [productos, setProducts] = useState([])
    const [load, setLoad] = useState(true)
    const { category } = useParams()

    const getProducts = () => {
        const db = getFirestore();
        const dbProductos = collection(db, "productos");
        const dbProdByCategory = !category ? dbProductos : query(dbProductos, where("category", "==", category));
        getDocs(dbProdByCategory)
          .then((response) => {
            setProducts(response.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            setLoad(false);
          })
          .catch((error) => {
            console.log(error);
          });
      };

      useEffect(() => {
        setLoad(true);
        getProducts();
      }, [category]);


    return (
        <div className="itemListContainer__container">
            {load ? (<Loading />) :
                (<>
                    <h1>{greeting}</h1>
                    <ItemList productos={productos} />
                </>
                )}
        </div>
    )
}

export default ItemListContainer