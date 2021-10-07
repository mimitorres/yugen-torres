import {
  Button,
  IconButton,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import PropTypes from 'prop-types';

import Counter from "../counter/Counter";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "1.5em",
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    color: "white",
    fontVariantCaps: "all-small-caps",
    maxWidth: "15em",
    width: "100%",
    marginTop: "0.5em",
  },
}));

const ItemCount = ({ stock, itemCount, setItemCount, onAdd }) => { //stock, setCount, onAdd
  const classes = useStyles();

  const addItem = () => {
    setItemCount((prevState) =>
      prevState < stock ? prevState + 1 : prevState
    );
  };

  const removeItem = () => {
    setItemCount((prevState) => (prevState > 1 ? prevState - 1 : 1));
  };

  return (
    <div className={classes.root}>
      <Counter addItem={addItem} removeItem={removeItem} itemCount={itemCount} stock={stock}/>
      <Button
        size="medium"
        className={classes.button}
        onClick={onAdd}
        disabled={stock === 0}
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
  onAdd: PropTypes.func,
}

export default ItemCount;
