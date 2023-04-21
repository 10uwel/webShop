import { Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React, { Fragment, useContext } from 'react'
import { Context } from '..'

const BrandBar = observer(() => {
    const { device } = useContext(Context)
    return (
        <Fragment>
            <Typography>Бренды</Typography>
            <ul className='categoryBox'>
            {device.brands.map(brand =>
                <li
                    className={brand.id === device.selectedBrand.id ? "category-link-active" : "category-link"}
                    key={brand.id}
                    onClick={() => device.setSelectedBrand(brand)}
                >
                    {brand.name}
                </li>
            )}
            </ul>
        </Fragment>
    )
})


export default BrandBar