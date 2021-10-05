import { IconButton, Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/styles";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { ROUTES } from "../../routes/routes";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});

const CartWidget = () => {
  const { totalProducts } = useContext(CartContext);
  const classes = useStyles();
  return (
    <IconButton color="inherit">
      <Badge badgeContent={totalProducts} color="secondary">
        <Link to={ROUTES.cart} className={classes.link}>
          <ShoppingCartIcon />
        </Link>
      </Badge>
    </IconButton>
  );
};

export default CartWidget;
