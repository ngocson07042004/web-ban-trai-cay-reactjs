import './css/menuSlider.css'
import MenuProduct from './MenuProduct'
import MenuBar from './MenuBar'

function MenuSlider(){
    return(
        <>
            <div className="menu-slider" id="#menu-slide">
                <div className="slider-title">
                    <span className="title">Danh sách sản phẩm</span>
                    <button className="btn-close" id="btn-close"><i class="fa-solid fa-xmark"></i></button>
                </div>

                <div className="menu-product-slider"><MenuProduct/></div>
                <div className="menubar-slider"><MenuBar/></div>
            </div>
        </>
    )
}

export default MenuSlider