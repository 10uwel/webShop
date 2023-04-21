import { observer } from 'mobx-react-lite'
import React, { Fragment, useContext } from 'react'
import { Row } from 'react-bootstrap'
import { Context } from '..'
import DeviceItem from './DeviceItem'

const DeviceList = observer(() => {
    const { device } = useContext(Context)

    return (
        <Fragment>
            <h2 className='productsHeading'>Товары</h2>
            <div className='products'>
                {device.devices.map(device =>
                    <DeviceItem key={device.id} device={device} />
                )}
            </div>
        </Fragment>
    )
})

export default DeviceList