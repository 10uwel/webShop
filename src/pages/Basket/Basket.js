import { observer } from 'mobx-react-lite'
import React, { Fragment, useContext } from 'react'
import { MdRemoveShoppingCart } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../..'
import "./Basket.css"
import CartItem from './CartItem'
import { SHIPPING_ROUTE } from '../../utils/consts'

const Basket = observer(() => {

  const navigate = useNavigate()
  const { cart } = useContext(Context)

  const deleteCartItem = (id) => {
    cart.removeCartItem(id)
  }

  const increaseQuantity = (id, quantity, stock) => {
    if (quantity < stock)
      cart.increaseQuantity(id)
  }

  const decreaseQuantity = (id, quantity) => {
    if (quantity > 1) {
      cart.decreaseQuantity(id)
    }
  }

  console.log(cart.cartItems.length)

  return (
    <Fragment>
      {cart.cartItems.length === 0 ? (
        <div className='emptyCart'>
          <MdRemoveShoppingCart />
          <p>Корзина пуста</p>
          <Link to="/">Просмотр товаров</Link>
        </div>
      ) : (

        <Fragment>
          <div className='cartPage'>
            <div className='cartHeader'>
              <p>Товар</p>
              <p>Количество</p>
              <p>Сумма</p>
            </div>

            {cart.cartItems && cart.cartItems.map((item) => (
              <div className='cartContainer'>
                <CartItem item={item} deleteCartItem={deleteCartItem} />
                <div className='cartInput'>
                  <button onClick={() => decreaseQuantity(item.id, item.quantity)}>-</button>
                  <input value={item.quantity} readOnly />
                  <button onClick={() => increaseQuantity(item.id, item.quantity, item.stock)}>+</button>
                </div>
                <p className='cartSubtotal'>{`${item.price * item.quantity}₽`}</p>
              </div>
            ))}

            <div className='cartGrossTotal'>
              <div></div>
              <div className='cartGrossTotalBox'>
                <p>Общая сумма</p>
                <p>{`${cart.cartItems.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                )}₽`}</p>
              </div>
              <div></div>
              <div className='checkOutBtn'>
                <button onClick={() => navigate(SHIPPING_ROUTE)}>Заказать</button>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  )
})

export default Basket