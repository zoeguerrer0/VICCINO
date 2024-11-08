import React,{Children, createContext} from "react";

const DataContext = createContext();

const DataProvider=({Children})=>{
    const [cart, setCart0] = useState ([]);//acá devuelve los productos
    const buyProducts=(producto)=>{
        //acá se ejecuta la función que se encarga de chekear si el producto ya fue agregado al carrito
        const productRepeat = cart.find((item)  => item.id === producto.id)

        if  (productRepeat) { //recorremos el carrito 
            setCart0(cart.map((item)=>(item.id ===producto.id ? {...producto, quanty:productRepeat. quanty + 1} : //si encuentra el item en el carrito le suma uno a su propiedad quanty(cuantificable), sino lo deja tal cual está el item
                 item )));
            
        }
        else{
            setCart0([...cart], {...producto, quanty: 1}) 
            // si no esta el prod en el CardStyleInterpolators, este else lo agrega en una unidad
        }



    }
    return <DataContext.Provider value={{cart, setCart0,buyProducts }}> 
    {/* esta liena es para poder usar esto en otros componentes */}
        {Children}
    </DataContext.Provider>
}
export default {DataContext ,DataProvider};