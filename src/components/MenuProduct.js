import { Link } from 'react-router-dom'
import bannerFruit from '../image/banner-dai-dien-trai-cay.jpg'
import bannerJuice from '../image/banner-nuoc-ep-trai-cay.jpg'
import bannerBoxFruit from '../image/banner-trai-cay-dong-hop.jpg'

function MenuProduct(){
    return(
        <ul className="menu-product">
            <li>
                <img src={bannerFruit} alt="Banner trái cây" />
                <Link to="/product">Trái cây tươi</Link>
            </li>

            <li>
                <img src={bannerJuice} alt="Banner nước ép" />
                <Link to="/product">Nước ép</Link>
            </li>

            <li>
                <img src={bannerBoxFruit} alt="Banner trái cây đóng hộp" />
                <Link to="/product">Trái cây đóng hộp</Link>
            </li>
        </ul>
    )
}

export default MenuProduct