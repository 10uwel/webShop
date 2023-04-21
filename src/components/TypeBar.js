import React, { Fragment, useContext } from 'react'
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { Typography } from '@mui/material';

const TypeBar = observer(() => {
    const { device } = useContext(Context)
    return (
        <Fragment>
            <Typography>Категории</Typography>
            <ul className='categoryBox'>
                {device.types.map(type =>
                    <li
                        className={type.id === device.selectedType.id ? "category-link-active" : "category-link"}
                        onClick={() => device.setSelectedType(type)}
                        key={type.id}
                    >
                        {type.name}
                    </li>)}
            </ul>

        </Fragment>
    );
});

export default TypeBar