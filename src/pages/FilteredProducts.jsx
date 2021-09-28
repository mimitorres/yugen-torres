import { Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemListContainer from "../component/item-list-container/ItemListContainer";
import Loading from "../component/loading/Loading";

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
    await fetch("https://run.mocky.io/v3/e92ed761-25f8-412a-b042-d97202872b4e")
      .then((res) => res.json())
      .then((data) => {
        setFilteredProducts(filterProducts(data, parseInt(id)));
        setTimeout(setLoading(false), 1000);
      })
      .catch((e) => console.error(e));
  };

  const filterProducts = (products, category) => {
    return products.filter((p) => p.categories.includes(category));
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
