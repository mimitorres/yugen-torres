import { useState } from "react";
import {
  Button,
  IconButton,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 1em 1em",
  },
  countRoot: {
    padding: "2px 4px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "15em",
    width: "100%",
    margin: "1em",
  },
  input: {
    textAlign: "center",
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    color: "white",
    fontVariantCaps: "all-small-caps",
    maxWidth: "15em",
    width: "100%",
  },
}));

const ItemCount = ({ product }) => {
  const classes = useStyles();
  const [itemCount, setItemCount] = useState(1);

  const addItem = () => {
    setItemCount((prevState) =>
      prevState < product.stock ? prevState + 1 : prevState
    );
  };

  const removeItem = () => {
    setItemCount((prevState) => (prevState > 1 ? prevState - 1 : 1));
  };

  const alertCart = () => {
    alert(`Added ${itemCount} ${itemCount>1 ? 'products' : 'product'} to the cart!`);
  };

  return (
    <div className={classes.root}>
      <div className={classes.countRoot}>
        <IconButton className={classes.iconButton} onClick={() => removeItem()} disabled={(itemCount === 1)}>
          <Remove />
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <Typography className={classes.input} variation="body2">
          {itemCount}
        </Typography>
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          className={classes.iconButton}
          onClick={() => addItem()}
          disabled={itemCount >= product.stock}
        >
          <Add />
        </IconButton>
      </div>
      <Button
        size="medium"
        className={classes.button}
        onClick={alertCart}
        disabled={product.stock === 0}
      >
        Add to Cart
      </Button>
    </div>
  );
};

ItemCount.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    stock: PropTypes.number.isRequired,
  }),
}

export default ItemCount;
