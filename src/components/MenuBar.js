import { Link, NavLink } from 'react-router-dom'
import Notify from './Notify'

const MenuBar = () =>{
    return(
        <ul className="menu">
            <li><NavLink to="/">Trang chủ</NavLink></li>
            <li><NavLink to="/introduction">Giới thiệu</NavLink></li>
            <li>
                <NavLink to="/product">
                    Sản phẩm
                    <i className="fa-solid fa-caret-down"></i>

                    <ul className="sub-menu-product">
                        <li><Link to="/product">Trái cây tươi</Link></li>
                        <li><Link to="/product">Nước ép</Link></li>
                        <li><Link to="/product">Trái cây đóng hộp</Link></li>
                    </ul>
                </NavLink>
            </li>
            <li><NavLink to="/question">Câu hỏi thường gặp</NavLink></li>
            <li><NavLink to="/recruitment">Tuyển dụng</NavLink></li>
            <li><NavLink to="/contact">Liên hệ</NavLink></li>
            <li><Notify/></li>
        </ul>
    )
}

export default MenuBar