import { Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import ItemListContainer from '../component/item-list-container/ItemListContainer';
import Loading from '../component/loading/Loading';

const Home = ({setLoading, loading}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setLoading(true)
        fetchProducts();
        // eslint-disable-next-line
      }, []);
    
      const fetchProducts = async () => {
        await fetch("https://run.mocky.io/v3/3094a2bb-f55e-41bb-ba61-f6a434a2fb82")
          .then((res) => res.json())
          .then((data) => {
            setProducts(data);
            setLoading(false);
          })
          .catch((e) => console.error(e));
      };

    return (
    !loading ? <Box>
        <ItemListContainer products={products} />
        <Loading state={loading} />
    </Box> : <Loading state={loading} />

    )
}

export default Home
