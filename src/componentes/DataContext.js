import React, { createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [cart, setCart] = useState([]); // Estado para los productos en el carrito

    const buyProducts = (producto) => {
        // Chequea si el producto ya está en el carrito
        const productRepeat = cart.find((item) => item.id === producto.id);

        if (productRepeat) {
            // Si el producto ya está, incrementa la cantidad
            setCart(cart.map((item) =>
                item.id === producto.id
                    ? { ...producto, quantity: productRepeat.quantity + 1 } // Cambiado a quantity
                    : item
            ));
        } else {
            // Si el producto no está, agrégalo con cantidad 1
            setCart([...cart, { ...producto, quantity: 1 }]); // Cambiado a quantity
        }
    };

    return (
        <DataContext.Provider value={{ cart, setCart, buyProducts }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };