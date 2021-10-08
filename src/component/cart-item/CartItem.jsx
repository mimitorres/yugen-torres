import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Fab,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Remove } from "@material-ui/icons";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Counter from "../counter/Counter";

const useStyles = makeStyles({
  row: {
    display: "flex",
    minWidth:"35em",
    maxWidth: "40em",
    margin: "0.5em",
  },
  image: {
    maxWidth: "12em",
  },
  detail: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minWidth: "22em",
    width: "100%",
  },
  count: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "start",
    fontWeight: "600",
  },
  price: {
    color: "grey",
  },
  divider: {
    margin: "1em 0",
    maxWidth: "42em",
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
    fontWeight: "600",
    textTransform: "none",
  },
});

const CartItem = ({ product, isLast }) => {
  const classes = useStyles();
  const { addOne, removeOne, removeProduct } = useContext(CartContext);

  return (
    <>
      <Card className={classes.row}>
        <CardMedia
          component="img"
          image={product.imageUrl}
          alt={product.title}
          className={classes.image}
        />
          <CardContent sx={{ flex: "1 0 auto" }} className={classes.detail}>
            <Typography component="div" variant="h5" className={classes.title}>
              {product.title}
            </Typography>
            <Typography component="div" variant="h6" className={classes.price}>
              ${product.price * product.quantity}
            </Typography>
            <Box className={classes.count}>
              <Counter
                itemCount={product.quantity}
                addItem={() => addOne(product.id)}
                removeItem={() => removeOne(product.id)}
                stock={product.stock}
              />
              <Fab size="small" className={classes.button} onClick={() => removeProduct(product.id)}>
                <Remove />
              </Fab>
            </Box>
          </CardContent>
      </Card>
      {!isLast && <Divider className={classes.divider} />}
    </>
  );
};

export default CartItem;
