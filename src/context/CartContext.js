import React, { useState } from 'react'

export const CartContext = React.createContext({});

const CartContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);

    const addProduct = (item, quantity) => {
        if(!isInCart(item.id)){
            setProducts([...products, {quantity, ...item}]);
            setTotalProducts((prevState) => prevState += quantity);
        }
    };

    const removeProduct = (itemId) => {
        setProducts(products?.filter(p => p.id !== itemId));
    };

    const clearCart = () => {
        setProducts([]);
    };

    const isInCart = (itemId) => {
        return products?.some(p => p.id === itemId);
    };

    const removeOne = (itemId) => {
        let updatedProducts = products.map(p => (p.id === itemId && p.quantity > 1 ? {...p, quantity: p.quantity-1} : p));
        setProducts(updatedProducts);
        console.log("removed one:\n", products);
    };

    const addOne = (itemId) => {
        let updatedProducts = products.map(p => (p.id === itemId && p.quantity <= p.stock ? {...p, quantity: p.quantity+1} : p));
        setProducts(updatedProducts);
        console.log(products);
    };

    return (
        <CartContext.Provider
        value={{products, addProduct, removeProduct, clearCart, isInCart, totalProducts, removeOne, addOne }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
