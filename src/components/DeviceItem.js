import React, { useContext } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '..'
import { DEVICE_ROUTE } from '../utils/consts'
import ReactStars from 'react-rating-stars-component'

const DeviceItem = ({ device }) => {
    const navigate = useNavigate()

    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: 2.5,
        isHalf: true,
    }

    return (
        <Link className='productCard' to={`${DEVICE_ROUTE}/${device.id}`}>
            <img src={process.env.REACT_APP_API_URL + device.img} alt={device.name} />
            <p>{device.name}</p>
            <div>
                <ReactStars {...options} /> <span>(256 отзывов)</span>
            </div>
            <span>{device.price}₽</span>
        </Link>
    )
}

export default DeviceItem