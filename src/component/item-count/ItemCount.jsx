import {
  Button,
  makeStyles,
} from "@material-ui/core";
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
    fontWeight: "600",
    color: "white",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    maxWidth: "15em",
    width: "100%",
    marginTop: "0.5em",
    textTransform: "none",
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
        add to cart
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
