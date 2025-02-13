import { createContext, useReducer } from "react"
import { Reducer } from "./Reducer"

const CartContext = createContext()
const FavoriteContext = createContext()
const ShuffleContext = createContext()

const TotalItem = (cart) =>{
    return cart.reduce((sum, item) => sum + item.quantity, 0)
}

const TotalPrice = (cart) =>{
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
}

const CartContextProvider = ({children}) =>{
    const [cart, dispatchCart] = useReducer(Reducer, [])
    return(
        <CartContext.Provider value={{cart, dispatchCart}}>
            {children}
        </CartContext.Provider>
    )
}

const FavoriteContextProvider = ({children}) =>{
    const [favorite, dispatchFavorite] = useReducer(Reducer, [])
    return(
        <FavoriteContext.Provider value={{favorite, dispatchFavorite}}>
            {children}
        </FavoriteContext.Provider>
    )
}

const ShuffleContextProvider = ({children}) =>{
    const [shuffle, dispatchShuffle] = useReducer(Reducer, [])
    return(
        <ShuffleContext.Provider value={{shuffle, dispatchShuffle}}>
            {children}
        </ShuffleContext.Provider>
    )
}

export { CartContext, FavoriteContext, ShuffleContext, 
    CartContextProvider, FavoriteContextProvider, ShuffleContextProvider,TotalPrice ,TotalItem}
