import { Elsie_900Black } from "@expo-google-fonts/dev";
import React, { createContext, useState} from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [cart, setCart] = useState ([]);

    const buyProducts = (product) => {
        const productRepeat = cart.find((item) => item.id === product.id)
    
        if(productRepeat){//Si productrepeat es verdadero
            setCart(cart.map((item) => (item.id === product.id ?
                {...product, quanty: productRepeat.quanty + 1} :
                item)));
        //Si encuentra el producto repetido, suma a la cantidad existente 1 más. 
        //Sino, no hace nada.
    
        }else{
            setCart ([...cart, {...product, quanty: 1}])//"desparrama/mete" el producto con todas sus propiedades ahi
        }
        
    }


    return <DataContext.Provider value={{ cart, setCart, buyProducts}}>{children}</DataContext.Provider>;

}

export {DataContext, DataProvider};