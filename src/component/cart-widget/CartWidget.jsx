import { IconButton, Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const CartWidget = () => {
  return (
    <IconButton color="inherit">
        <Badge badgeContent={1} color="secondary">
            <ShoppingCartIcon />
        </Badge>
    </IconButton>
  );
};

export default CartWidget;
