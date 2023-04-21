import React from 'react'
import { Link } from 'react-router-dom'
import { DEVICE_ROUTE } from '../../utils/consts'
import "./CartItem.css"


const CartItem = ({ item, deleteCartItem }) => {


  return (
    <div className="cartItem">
      <img src={process.env.REACT_APP_API_URL + item.img} alt="ssa" />
      <div>
        <Link to={`${DEVICE_ROUTE}/${item.id}`}>{item.name}</Link>
        <span>{`Цена: ${item.price}₽`}</span>
        <p onClick={() => deleteCartItem(item.id)}>Удалить</p>
      </div>
    </div>
  )
}

export default CartItem