import React, { Fragment, useState } from 'react'
import "./Shipping.css"
import PinDropIcon from '@mui/icons-material/PinDrop';
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PublicIcon from '@mui/icons-material/Public';
import PhoneIcon from '@mui/icons-material/Phone';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';

const Shipping = () => {

    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [pinCode, setPinCode] = useState("")
    const [phoneNo, setPhoneNo] = useState()

    const shippingSubmit = () =>{

    }

    return (
        <Fragment>
            <div className='shippingContainer'>
                <div className='shippingBox'>
                    <h2 className='shippingHeader'>Детали доставки</h2>

                    <form
                    className='shippingForm'
                    encType='multipart/form-data'
                    onSubmit={shippingSubmit}
                    >
                        <div>
                            <HomeIcon />
                            <input 
                            type="text"
                            placeholder="Адрес"
                            required
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div>
                            <PinDropIcon />
                            <input 
                            type="number"
                            placeholder="Пин код"
                            required
                            value={pinCode}
                            onChange={(e) => setPinCode(e.target.value)}
                            />
                        </div>
                        <div>
                            <PhoneIcon />
                            <input 
                            type="number"
                            placeholder="Номер телефона"
                            required
                            value={phoneNo}
                            onChange={(e) => setPhoneNo(e.target.value)}
                            size="10"
                            />
                        </div>
                        <div>
                            <PublicIcon />
                            <select required
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}>
                                <option value="" >Страны</option>
                            </select>
                        </div>
            <input 
            type="submit"
            value="Продолжить"
            className="ShippingBtn"
            disabled={city ? false : true} 
            />

                    </form>

                </div>
            </div>
        </Fragment>
    )
}

export default Shipping