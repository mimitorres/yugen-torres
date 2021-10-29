import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import OrderItem from '../order-item/OrderItem'
const useStyles = makeStyles({
    container:{
      margin:"1em",
    },
});
const OrderList = ({list}) => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            {list.map(p => <OrderItem product={p} key={p.id}/>)}
        </Box>
    )
}

export default OrderList
