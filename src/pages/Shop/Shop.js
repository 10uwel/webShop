import { observer } from 'mobx-react-lite'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Context } from '../..'
import BrandBar from '../../components/BrandBar'
import DeviceList from '../../components/DeviceList'
import Pages from '../../components/Pages'
import TypeBar from '../../components/TypeBar'
import Slider from "@mui/material/Slider"
import { fetchDevices, fetchBrands, fetchTypes } from '../../http/deviceAPI'
import './shop.css'
import { Typography } from '@mui/material'

const Shop = observer(() => {
  const { device } = useContext(Context)

  const [price, setPrice] = useState([0, 25000]);

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
    fetchBrands().then(data => device.setBrands(data))
    fetchDevices(null, null, 1, device.limit).then(data => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    })
  }, [])

  useEffect(() => {
    fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, device.limit, price[0], [price[1]]).then(data => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    })
  }, [device.page, device.selectedType, device.selectedBrand, price])

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice)
  }

  return (

    <Fragment>
      <div>
        <DeviceList />
        <Pages />
      </div>
      <div className='filterBox'>
        <Typography>Цена</Typography>
        <Slider
          value={price}
          onChange={priceHandler}
          valueLabelDisplay="auto"
          aria-labelledby='range-slider'
          min={0}
          max={25000}
        />
        <TypeBar />
        <BrandBar />
      </div>
    </Fragment>

  )
})

export default Shop