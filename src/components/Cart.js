import { useContext } from 'react'
import { CartContext, TotalPrice, TotalItem } from '../Features/ContextProvider'
import './css/Cart.css'

const Cart = () =>{
  const {cart, dispatchCart} = useContext(CartContext)
  const Increase = (id) =>{
    const Index = cart.findIndex(p => p.id === id)
    if(cart[Index].quantity < 10)
      dispatchCart({ type: "Increase", id })
  }
  const Decrease = (id) =>{
    const Index = cart.findIndex(p => p.id === id)
    if(cart[Index].quantity > 1)
      dispatchCart({ type: "Decrease", id })
  }

  for(let i = 0; i < cart.length; i++)
    cart[i].id = i + 1
  return (
    <>
      <div className="cart" id="cart">
        <div className="cart-title">
          <h4>Giỏ hàng</h4>
        </div>

        <div className="cart-product">
          {cart.length === 0 ? (
            <p>Giỏ hàng của bạn trống.</p>
          ) : (
            <>
              <h4 className="total-cart">
                Tổng số lượng: <span>{TotalItem(cart)}</span>   Tổng tiền: <span>{TotalPrice(cart) + ".000đ"}</span>
              </h4>
              <ul className="carts-list">
                {cart.map(item => (
                  <li key={item.id}>
                    <span className="quantity">{item.id}</span>
                    <img src={item.image} alt={item.title}/>
                    <h5 className="title-product">{item.title}</h5>
                    <span className="product-price">{item.price + ".000đ"}</span>
                    <div className="btn-group">
                      <button className="btn btn-decrease" onClick={() => Decrease(item.id)}><b>-</b></button>
                      <span className="quantity">{item.quantity}</span>
                      <button className="btn btn-increase" onClick={() => Increase(item.id)}><b>+</b></button>
                    </div>
                    <button className="btn-remove-cart" onClick={() => dispatchCart({ type: "Remove", id: item.id })}>Xóa</button>
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
export default Cart