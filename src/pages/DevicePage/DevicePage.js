import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchBrands, fetchOneDevice } from '../../http/deviceAPI'
import { Context } from '../..'
import "./DevicePage.css"
import ReactStars from 'react-rating-stars-component'

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] })

  const [quantity, setQuanity] = useState(1)

  const { id } = useParams()

  const { cart } = useContext(Context)

  useEffect(() => {
    fetchOneDevice(id).then(data => setDevice(data))

  }, [])

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: device.rating,
    isHalf: true,
  }

  const addItemsToCart = () => {
    const cartItem = {
      id: device.id,
      name: device.name,
      price: device.price,
      img: device.img,
      quantity: quantity,
      stock: device.quantity,
    }
    cart.setCartItems(cartItem)
  }

  const increaseQuantity = () => {
    if (device.quantity <= quantity) return;

    const qty = quantity + 1;
    setQuanity(qty)
  }

  const decreaseQuantity = () => {
    if (quantity <= 1) return;

    const qty = quantity - 1
    setQuanity(qty)
  }

  return (
    <Fragment>
      <div className='productDetails'>
        <div>
          <img className='productImage' src={process.env.REACT_APP_API_URL + device.img} alt={device.name} />
        </div>
        <div>
          <div className='detailsBlock-1'>
            <h2>{device.name}</h2>
            <p>Product # {device.id}</p>
          </div>
          <div className='detailsBlock-2'>
            <ReactStars {...options} />
            <span> (256 отзывов) </span>
          </div>
          <div className='detailsBlock-3'>
            <h1>{`${device.price}₽`}</h1>
            <div className='detailsBlock-3-1'>
              <div className='detailsBlock-3-1-1'>
                <button onClick={decreaseQuantity}>-</button>
                <input value={quantity} type="number" />
                <button onClick={increaseQuantity}>+</button>
              </div>{" "}
              <button onClick={addItemsToCart}>Добавить в корзину</button>
            </div>

            <p>
              Статус: {""}
              <b className={device.quantity < 1 ? "redColor" : "greenColor"}>
                {device.quantity < 1 ? "Нет в наличии" : "В наличии"}
              </b>
            </p>
          </div>

          <div className='detailsBlock-4'>
            Описание: <p>Какоеп авыолтмо ыиолмв лопрыдловр лошыгравы лмывоимвы ва алвот ыплорфылаотвылостфвшголтсфывот овтылфотв </p>
          </div>
          <button className='submitReview'>Оставить отзыв</button>
        </div>

      </div>
    </Fragment>
  )
}

export default DevicePage