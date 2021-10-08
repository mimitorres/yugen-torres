import React, { useEffect, useState } from 'react'

export const CartContext = React.createContext({});

const CartContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);

    useEffect(() => {
        updateTotalProducts();
    // eslint-disable-next-line
    }, [products]);

    const addProduct = (item, quantity) => {
        if(!isInCart(item.id)){
            setProducts([...products, {quantity, ...item}]);
            setTotalProducts((prevState) => prevState += quantity);
        }
    };

    const removeProduct = (itemId) => {
        const product = products.find(p => p.id === itemId);
        setTotalProducts((prevState) => prevState -= product.quantity);
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
    };

    const addOne = (itemId) => {
        let updatedProducts = products.map(p => (p.id === itemId && p.quantity <= p.stock ? {...p, quantity: p.quantity+1} : p));
        setProducts(updatedProducts);
    };

    const updateTotalProducts = () => {
        let total = 0;
        products.forEach(p => total += p.quantity);
        setTotalProducts(total);
    }

    return (
        <CartContext.Provider
        value={{products, addProduct, removeProduct, clearCart, isInCart, totalProducts, removeOne, addOne }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
