import { IconButton, Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

  const { totalProducts } = useContext(CartContext);

  return (
    <IconButton color="inherit">
        <Badge badgeContent={totalProducts} color="secondary">
            <ShoppingCartIcon />
        </Badge>
    </IconButton>
  );
};

export default CartWidget;
