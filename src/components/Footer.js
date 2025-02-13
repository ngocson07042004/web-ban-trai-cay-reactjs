import './css/footer.css'
import MenuBar from './MenuBar'

function Footer(){
    return (
        <footer>
            <div className="content-menu">
                <ul className="menu-footer">
                    <li>
                        VĂN PHÒNG CHÚNG TÔI
                        <MenuBar/>
                    </li>

                    <li>
                        VỀ CHÚNG TÔI
                        <MenuBar/>
                    </li>

                    <li>
                        CHÍNH SÁCH BÁN HÀNG
                        <MenuBar/>
                    </li>

                    <li>
                        THEO DÕI CHÚNG TÔI
                        <MenuBar/>
                    </li>
                </ul>
            </div>

            <hr/>

            <div className="content-footer">
                <div className="content-address">
                    <h4>Thiên đường mua sắm Fruit Mart</h4>
                    <p>- Địa chỉ: Toà nhà LALA, đường A, Ba Đình, Hà Nội</p>
                    <p>- Điện thoại: 1900 1024 - Email: support.fruit.mart@.vn</p>
                </div>

                <div className="content-email">
                    <h4>NHẬN TIN KHUYẾN MÃI</h4>

                    <div className="input-group-footer">
                        <input type="text" placeholder="Nhập email của bạn..."/>
                        <button>Đăng ký</button>
                    </div>

                    <div className="icons-footer">
                        <button className="btn btn1">
                            <i className="fa-brands fa-facebook"></i>
                        </button>

                        <button className="btn btn2">
                            <i className="fa-brands fa-twitter"></i>
                        </button>
            
                        <button className="btn btn3">
                            <i className="fa-brands fa-google"></i>
                        </button>

                        <button className="btn btn4">
                            <i className="fa-brands fa-tiktok"></i>
                        </button>
                    </div>
                </div>
            </div>
            <hr />
        </footer>
    )
}

export default Footer