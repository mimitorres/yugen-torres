import { Box } from '@material-ui/core'
import React from 'react'
import CartItem from '../cart-item/CartItem'

const CartList = ({products}) => {
    return (
        <>
            {products.map((p, i) => <CartItem product={p} isLast={i === products.length-1} key={p.id}/>)}
        </>
    )
}

export default CartList
