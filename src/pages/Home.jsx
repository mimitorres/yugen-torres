import React, { useEffect, useState } from 'react'
import ItemListContainer from '../component/item-list-container/ItemListContainer';

const Home = ({setLoading}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setLoading(true)
        fetchProducts();
      }, []);
    
      const fetchProducts = async () => {
        await fetch("https://run.mocky.io/v3/28e07712-dd9a-4cfe-a7cd-e6d8bccd04c7")
          .then((res) => res.json())
          .then((data) => {
            setProducts(data);
            setLoading(false);
          })
          .catch((e) => console.error(e));
      };

    return (
    <div>
        <ItemListContainer products={products} />
    </div>

    )
}

export default Home
