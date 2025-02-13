import { useState, useContext } from 'react'
import { CartContext, FavoriteContext, ShuffleContext } from '../Features/ContextProvider'
import './css/itemProduct.css'

const ItemProduct = ({ product }) =>{
    const { dispatchCart } = useContext(CartContext)
    const { dispatchFavorite } = useContext(FavoriteContext)
    const { dispatchShuffle } = useContext(ShuffleContext)

    const [active, setActive] = useState(false)

    const handleClickFavorite = () =>{
        if(active === false){
            setActive(true)
            dispatchFavorite({ type: "Add", product: product })
        }
        else{
            setActive(false)
            dispatchFavorite({ type: "Remove", id: product.id })
        }
    }

    return(
        <div className="item">
            <img src={product.image} alt={product.title}/>
            <h5 className="title-product">{product.title}</h5>
            <span className="product-price">{product.price + ".000đ/" + product.unit}</span>
            <button className="btn-heart" id="btn-heart"
                onClick={() =>{
                        handleClickFavorite()
                    }
            }>
                <i 
                    className="fa-solid fa-heart"
                    id={active === true ? "active" : ""}
                    ></i>
            </button>

            <button className="btn-cart" onClick={() => dispatchCart({ type: "Add", product: product })}>
                <i className="fa-solid fa-cart-shopping"></i>
            </button>

            <button className="btn-shuffle" onClick={() => dispatchShuffle({ type: "Add", product: product })}>
                <i className="fa-solid fa-chart-simple"></i>
            </button>
        </div>
    )
}
export default ItemProduct