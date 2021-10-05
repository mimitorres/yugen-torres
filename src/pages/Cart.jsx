import { useContext } from "react";
import CartList from "../component/cart-list/CartList";
import EmptyCart from "../component/empty-cart/EmptyCart";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { products } = useContext(CartContext);

  return products.length > 0 ? <CartList products={products} /> : <EmptyCart />;
};

export default Cart;
