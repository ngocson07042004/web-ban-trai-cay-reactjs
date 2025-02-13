import { Link } from 'react-router-dom'
import logoTitle from '../image/logo-title.png'
import MenuProduct from '../components/MenuProduct'
import MenuTab from '../components/MenuTab'
import ProductList from '../components/ProductList'
import './cssPages/default.css'
import './cssPages/product.css'

function Product(){
  document.title = "Tất cả sản phẩm"
  
  return (
    <>
      <div className="content">
        <div className="url-content">
          <Link to="/">Trang chủ</Link> / <span>Tất cả sản phẩm</span>
        </div>

        <h3>Tất cả sản phẩm</h3><br/>

        <hr/>

        <div className="product-content">
          <div className="menu-product-content">
            <MenuProduct/>
          </div>
          
          <div className="title-content">
            <div className="title-img">
              <img src={logoTitle} alt="Logo"/>
            </div>

            <div class="title-product">
              <h4>Tất cả sản phẩm</h4><br />
              <span>Ở đây chúng tôi có rất nhiều sản phẩm đáp ứng cho nhu cầu thiết yếu của khách hàng, với phương châm bán hàng chất lượng gặt hái thành công, mọi thông tin thắc mắc xin gửi về <strong>support.fruit.mart@.vn</strong> hoặc qua số điện thoại <strong>0987654321</strong> để được hỗ trợ giải đáp thắc mắc về sản phẩm. Chúng tôi hy vọng đem lại lợi ích cho khách hàng nhiều hơn qua từng sản phẩm.</span>
            </div>
          </div>
          <ul className="menu-price">
            <li>Tên A-Z</li>
            <li>Tên Z-A</li>
            <li>Từ cao đến thấp</li>
            <li>Từ thấp đến cao</li>
            <li>Mới nhất</li>
            <li>Cũ nhất</li>
          </ul>
        </div>

        <MenuTab/>
        <ProductList/>
      </div>
    </>
  )
}
  
  export default Product