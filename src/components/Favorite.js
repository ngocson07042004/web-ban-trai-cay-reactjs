import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FavoriteContext } from '../Features/ContextProvider'
import './css/Favorite.css'

const Favorite = () =>{
  const {favorite} = useContext(FavoriteContext)
  return (
    <>
      <div className="favorite" id="favorite">
        <div className="favorite-title">
          <h4>Danh sách yêu thích của tôi</h4>
        </div>

        <div className="favorite-product">
          {favorite.length === 0 ? (
            <p>Bạn chưa có sản phẩm yêu thích, <Link to="/">vào đây</Link> để thêm thật nhiều sản phẩm vào yêu thích nào.</p>
          ) : (
            <>
            <ul className="favorites-list">
              {favorite.map(item => (
                <li key={item.id}>
                  <span className="quantity">{item.id}</span>
                  <img src={item.image} alt={item.title}/>
                  <h5 className="title-product">{item.title}</h5>
                  <span className="product-price">{item.price + ".000đ"}</span>
                </li>
              ))}
            </ul>
            </>
          )}
        </div>
      </div>
    </>
  )
}



export default Favorite
