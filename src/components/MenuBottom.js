import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../Features/ContextProvider'
import './css/menuBottom.css'

function MenuBottom(){
    const {cart} = useContext(CartContext)

    return(
        <div className="container-menu-bottom">
            <ul className="menu-bottom">
                <li>
                    <Link to="/">
                        <span><i className="fa-solid fa-house icon"></i></span>
                        <span>Trang chủ</span>
                    </Link>
                </li>

                <li id="btn-category">
                    <i className="fa-solid fa-list"></i>
                    <span>Danh mục</span>
                </li>
                
                <li id="btn-cart">
                    <i className="fa-solid fa-basket-shopping"></i>
                    <span>Giỏ hàng</span>
                    <span className="quantity">{cart.length}</span>      
                </li>

                <li>
                    <Link to="/news">
                        <i className="fa-solid fa-newspaper"></i>
                        <span>Tin tức</span>
                    </Link>
                </li>

                <li id="btn-favorite">
                    <i className="fa-solid fa-heart"></i>
                    <span>Yêu thích</span>
                </li>
            </ul>
        </div>
    )
}

export default MenuBottom