import React from 'react'
import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import Loading from '../Loading/Loading'
import { getFirestore, getDoc, doc } from "firebase/firestore";

import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [producto, setProduct] = useState(null)
    const [load, setLoad] = useState(true)
    const { id } = useParams()

    const getProduct = () => {
        const db = getFirestore();
        const dbProdById = doc(db, "productos", `${id}`);
        getDoc(dbProdById)
          .then((response) => {
            setProduct({ id: response.id, ...response.data() });
            setLoad(false);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
      useEffect(() => {
        getProduct();
      }, [id]);
    

    return (
        <div className='itemDetailContainer__container'>
            {load ? (<Loading />)  : <ItemDetail producto={producto} />}
        </div>
    )
}

export default ItemDetailContainer