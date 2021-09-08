import { makeStyles } from '@material-ui/core'
import React from 'react'
import ProductCard from '../product-card/ProductCard'

const useStyles = makeStyles({
    catalog:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }
})

const ItemListContainer = ({products}) => {
    const classes = useStyles()
    return (<div className={classes.catalog}>
       {products.map(p => <ProductCard product={p}/>)}
    </div>
    )
}

export default ItemListContainer
