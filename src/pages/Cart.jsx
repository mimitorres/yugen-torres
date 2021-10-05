import { Box, Button, Fab, makeStyles, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { useContext } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import CartList from "../component/cart-list/CartList";
import EmptyCart from "../component/empty-cart/EmptyCart";
import OrderSummary from "../component/order-summary/OrderSummary";
import { CartContext } from "../context/CartContext";
import { ROUTES } from "../routes/routes";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "start",
    fontWeight: "bold",
    marginBottom: "1em",
  },
  summaryContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    color: "white",
    fontVariantCaps: "all-small-caps",
    maxWidth: "18.5em",
    width: "100%",
    padding: "1em",
    textAlign: "center",
  },
  fab: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    color: "white",
    margin: "0 1.5em",
    maxWidth: "3em",
    maxHeight: "3em",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});

const Cart = () => {
  const { products, totalProducts } = useContext(CartContext);
  const classes = useStyles();
  let history = useHistory();

  return products.length > 0 ? (
    <Box className={classes.container}>
      <Fab onClick={() => history.goBack()} className={classes.fab}>
        <ArrowBack fontSize="small" />
      </Fab>
      <Box>
        <Typography variant="h4" className={classes.title}>
          YOUR CART
        </Typography>
        <Box className={classes.container}>
          <Box>
            <CartList products={products} />
          </Box>
          <Box className={classes.summaryContainer}>
            <OrderSummary products={products} totalProducts={totalProducts} />
            <Button className={classes.button}>
              <Link to={ROUTES.checkout} className={classes.link}>Proceed to checkout!</Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  ) : (
    <EmptyCart />
  );
};

export default Cart;
