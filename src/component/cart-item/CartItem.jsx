import {
  Box,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Counter from "../counter/Counter";

const useStyles = makeStyles({
  row: {
    display: "flex",
    maxWidth: "40em",
    margin: "0.5em",
    border: "10px solid",
    borderImageSlice: "1",
    borderWidth: "5px",
    borderImageSource: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
  image: {
    maxWidth: "12em",
  },
  detail: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  count: {
    maxWidth: "10em",
  },
  title: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "start",
  },
  price: {
    color: "grey",
  },
});

const CartItem = ({ product }) => {
  const classes = useStyles();
  const { addOne, removeOne } = useContext(CartContext);

  return (
    <Card className={classes.row}>
      <CardMedia
        component="img"
        image={product.imageUrl}
        alt={product.title}
        className={classes.image}
      />
      <Box className={classes.detail}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5" className={classes.title}>
            {product.title}
          </Typography>
          <Typography component="div" variant="h6" className={classes.price}>
            {product.price}
          </Typography>
          <Box className={classes.count}>
            <Counter itemCount={product.quantity} addItem={() => addOne(product.id)} removeItem={() => removeOne(product.id)} stock={product.stock}/>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default CartItem;
