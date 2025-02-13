import { CartContextProvider, FavoriteContextProvider, ShuffleContextProvider } from './ContextProvider'

export default function Context({children}){
    return(
        <ShuffleContextProvider>
            <CartContextProvider>
                <FavoriteContextProvider>
                    {children}
                </FavoriteContextProvider>
            </CartContextProvider>
        </ShuffleContextProvider>
    )
}