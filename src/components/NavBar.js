import MenuBar from './MenuBar'
import MenuProduct from './MenuProduct'
import './css/navbar.css'

const Navbar = () => {
    return (
        <div className="container-menu">
            <nav className="navbar">
                <div className="navbar-menu-product">
                    <button>
                        <span>Danh sách sản phẩm</span>
                        <MenuProduct/>
                    </button>
                </div>
                <MenuBar/> 
            </nav>
        </div>
    )
}

export default Navbar