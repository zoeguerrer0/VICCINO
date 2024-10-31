import React,{Children, createContext} from "react";

const DataContext = createContext();

const DataProvider=({Children})=>{
    const [cart, setCart0] = useState ([]);//acá devuelve los productos
    const buyProducts=(producto)=>{
        //acá se ejecuta la función que se encarga de chekear si el producto ya fue agregado al carrito
        const productRepeat = cart.find((item)  => item.id === producto.id)

        if  (productRepeat) {

        }
        else{
            setCart0([...cart, producto]) 
        }



    }
    return <DataContext.Provider value={{cart, setCart0}}>
        {Children}
    </DataContext.Provider>
}
export default {DataContext ,DataProvider};