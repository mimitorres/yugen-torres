import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
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
          let result = [];
          const productsRef = collection(db, "products");
          const q = query(productsRef, orderBy("title"), limit(5));
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            result.push({...doc.data(), fsId: doc.id});
          });
          setProducts(result);
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
