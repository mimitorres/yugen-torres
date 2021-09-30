import { collection, getDocs } from "firebase/firestore/lite";
import { Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import ItemListContainer from '../component/item-list-container/ItemListContainer';
import Loading from '../component/loading/Loading';
import { db } from '../firebase';

const Home = ({setLoading, loading}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setLoading(true)
        fetchProducts();
        // eslint-disable-next-line
      }, []);
    
      const fetchProducts = async () => {
        // await fetch("https://run.mocky.io/v3/e92ed761-25f8-412a-b042-d97202872b4e")
        //   .then((res) => res.json())
        //   .then((data) => {
        //     setProducts(data);
        //     setLoading(false);
        //   })
        //   .catch((e) => console.error(e));

          const productsCollection = collection(db, "/products");
          const productsSnapshot = await getDocs(productsCollection);
          const productsList = productsSnapshot.docs.map((doc) => ({ firebaseId: doc.id, ...doc.data()}));
          setProducts(productsList);
          setLoading(false);
      };

    return (
    !loading ? <Box>
        <ItemListContainer products={products} />
        <Loading state={loading} />
    </Box> : <Loading state={loading} />

    )
}

export default Home
