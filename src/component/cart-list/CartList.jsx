import { Box } from '@material-ui/core'
import React from 'react'
import CartItem from '../cart-item/CartItem'

const CartList = ({products}) => {
    return (
        <Box>
            {products.map(p => <CartItem product={p} />)}
        </Box>
    )
}

export default CartList
