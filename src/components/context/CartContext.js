/*****************************
 IMPORTACIONES
 ****************************/
// createContext nos permite crear el contexto de la app y el useContext utilizar el contexto creado

import { useContext, createContext, useState } from "react";

//1 Crear contexto  ===> valor dentro de la funcion es el valor por default del contexto
//2 exportar el contexto creado

export const CartContext = createContext([]);

//3 Crear funcion para usar el contexto
//4 podemos definirlo como un hook personalizado
//exportar la funcion que almacena el hook useContext

export const useCartContext = () => {
    
    return(
        useContext(CartContext)
        ) 
};

//6 Crear el componente del contexto proveedor

const CartProvider = ({children}) => {

    //Estado del CartProvider
    const [items, setItems] = useState([]);

    //Funciones de nuestro CartProvider
    console.log(items);

    const agregarAlCarrito = (data) => {

        if (validarProductoExistente(data.id)){
            alert ("El producto ya esta en el carrito")
        }else {
            const listaActual = items;
            listaActual.push(data);
            setItems(listaActual);
            console.log(items);
        }
    }

    const borrarProductoDelCarrito = (id) => {
        const nuevaLista = items.filter(e => e.id !== id)
        setItems(nuevaLista);
    }

    const limpiarCarrito = () => {
        setItems([]);
    }

    const validarProductoExistente = (id) => {
        if(items.find(e => e.id === id)){
            return true
        } else {
            return false}
    }

    //Render de mi CartProvider
    return (
        <CartContext.Provider value={{items, agregarAlCarrito}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider;





