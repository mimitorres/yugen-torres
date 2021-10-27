import { Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { isEmpty } from "lodash";

import ItemListContainer from "../component/item-list-container/ItemListContainer";
import Loading from "../component/loading/Loading";
import NotFound from "../pages/NotFound";

import { db } from "../firebase";
import { query, collection, where, getDocs } from "firebase/firestore";

const FilteredProducts = ({ setLoading, loading }) => {
  const { name } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [categoryNotFound, setCategoryNotFound] = useState(false);

  useEffect(() => {
    if (name) {
      setLoading(true);
      fetchSelectedCategory().catch((e) => console.error(e));
    }
    // eslint-disable-next-line
  }, [name]);

  useEffect(() => {
    if(!isEmpty(currentCategory)){
      setCategoryNotFound(false);
      fetchFilteredProducts().catch((e) => console.error(e));
    } else {
      setCategoryNotFound(true);
      setLoading(false);
    }
    // eslint-disable-next-line
  }, [currentCategory]);

  const fetchSelectedCategory = async () => {
    const categoriesRef = collection(db, "categories");
    const q = query(categoriesRef, where("name", "==", name));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setCurrentCategory({...doc.data(), fsId: doc.id});
    });
  }

  const fetchFilteredProducts = async () => {

    let filteredProds = [];

    const productsRef = collection(db, "products");
    const q = query(productsRef, where("categories", "array-contains", parseInt(currentCategory.id)));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      filteredProds.push({...doc.data(), fsId: doc.id});
    });

    setFilteredProducts(filteredProds);
    setLoading(false);
  };

  return !loading ? (
    categoryNotFound ? <NotFound/> : <Box>
      <ItemListContainer products={filteredProducts} />
    </Box>
  ) : (
    <Loading state={loading} />
  );
};

export default FilteredProducts;
