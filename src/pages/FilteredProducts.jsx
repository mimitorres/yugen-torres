import { Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemListContainer from "../component/item-list-container/ItemListContainer";
import Loading from "../component/loading/Loading";
import { db } from "../firebase";
import { query, collection, where, getDocs } from "firebase/firestore";

const FilteredProducts = ({ setLoading, loading }) => {
  const { id } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetchFilteredProducts();
    }
    // eslint-disable-next-line
  }, [id]);

  const fetchFilteredProducts = async () => {

    let filteredProds = [];

    const productsRef = collection(db, "products");
    const q = query(productsRef, where("categories", "array-contains", parseInt(id)));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      filteredProds.push({...doc.data(), fsId: doc.id});
    });

    setFilteredProducts(filteredProds);
    setLoading(false);

  };

  return !loading ? (
    <Box>
      <ItemListContainer products={filteredProducts} />
    </Box>
  ) : (
    <Loading state={loading} />
  );
};

export default FilteredProducts;
