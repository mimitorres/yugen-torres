import { makeStyles } from "@material-ui/core";
import PropTypes from 'prop-types';

import ProductCard from "../product-card/ProductCard";

const useStyles = makeStyles({
  catalog: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
});

const ItemListContainer = ({ products }) => {
  const classes = useStyles();

  return (
    <div className={classes.catalog}>
      {products.map(p => (<ProductCard product={p}  key={p.title}/>))}
    </div>
  );
};

ItemListContainer.defaultProps ={
  products: [],
}

ItemListContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    stock: PropTypes.number,
    imageUrl: PropTypes.string,
  })).isRequired,
}

export default ItemListContainer;
