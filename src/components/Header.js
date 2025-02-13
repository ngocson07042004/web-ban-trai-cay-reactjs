import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../image/logo.png'
import { setLogin } from '../pages/Login'
import Notify from './Notify'
import { CartContext, FavoriteContext, ShuffleContext } from '../Features/ContextProvider'
import './css/header.css'


function Header(){
    const {cart} = useContext(CartContext)
    const {favorite} = useContext(FavoriteContext)
    const {shuffle} = useContext(ShuffleContext)
    const [isLogin] = useState(setLogin)

    const login = useNavigate()
    const link = useNavigate() //Link đến cart, favorite, shuffle

    const handlerClick = (url) =>{
        if(!isLogin.state){
            alert("Bạn chưa đăng nhập")
            login("/login")
        }
        else{
            link(url)
        }
    }

    return (
        <header>
            <img src={logo} alt="Logo" className="img-header"/>

            <div className="input-group-header">
                <input type="text" placeholder="Tìm kiếm sản phẩm..."/>
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>

            <Notify/>

            <div className="icons-header">
                <button className="btn"onClick={() => handlerClick("/favorite")}>
                    <i className="fa-regular fa-heart"></i>
                    <span className="amount" id="count-heart">{favorite.length || 0}</span>
                    <span className="hidden">Yêu thích</span>
                </button>

                <button className="btn" onClick={() => handlerClick("/cart")}>
                    <i className="fa-solid fa-cart-shopping" id="btn-cart"></i>
                    <span className="amount">{cart.length || 0}</span>
                    <span className="hidden">Giỏ hàng</span>
                </button>

                <button className="btn" onClick={() => handlerClick("/shuffle")}>
                    <i class="fa-solid fa-shuffle"></i>
                    <span className="amount">{shuffle.length || 0}</span>
                    <span className="hidden">So sánh</span>
                </button>
            </div>
        </header>
    )
}

export default Header