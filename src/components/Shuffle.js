import { useContext } from 'react'
import { ShuffleContext } from '../Features/ContextProvider'
import { Link } from 'react-router-dom'
import './css/Shuffle.css'

const Shuffle = () =>{
  const {shuffle, dispatchShuffle} = useContext(ShuffleContext)

  for(let i = 0; i < shuffle.length; i++)
    shuffle[i].id = i + 1
  return (
    <>
      <div className="shuffle" id="shuffle">
        <div className="shuffle-title">
          <h4>So sánh sản phẩm</h4>
        </div>

        <div className="shuffle-product">
          {shuffle.length === 0 ? (
            <p>Bạn chưa có sản phẩm để so sánh, <Link to="/">vào đây</Link> để thêm thật nhiều sản phẩm vào để so sánh nào.</p>
          ) : (
            <>
              <ul className="shuffles-list">
                {shuffle.map(item => (
                  <li key={item.id}>
                    <span className="quantity">{item.id}</span>
                    <img src={item.image} alt={item.title}/>
                    <h5 className="title-product">{item.title}</h5>
                    <span className="product-price">{item.price + ".000đ"}</span>
                    <button className="btn-remove-shuffle" onClick={() => dispatchShuffle({ type: "Remove", id: item.id })}>Xóa</button>
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
export default Shuffle