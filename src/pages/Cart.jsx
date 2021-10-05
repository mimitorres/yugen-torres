import { Box } from '@material-ui/core'
import { useContext } from 'react';
import CartItem from '../component/cart-item/CartItem';
import EmptyCart from '../component/empty-cart/EmptyCart';
import { CartContext } from '../context/CartContext'

const Cart = () => {
    const { products } = useContext(CartContext);

    return (
        products.length > 0 ? <CartItem product={products[0]}/> : <EmptyCart/>
    )
}

export default Cart
