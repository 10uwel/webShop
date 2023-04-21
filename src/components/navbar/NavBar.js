import React, { useContext } from 'react'
import { Context } from '../..'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom'
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../../utils/consts'
import { Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'


const NavBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{ color: 'white', fontSize: 24, textDecoration: 'none'}} to={SHOP_ROUTE}>DiStore</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button
                            variant='outline-light'
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ms-2"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant='outline-light' onClick={() => navigate(LOGIN_ROUTE)} >Авторизация</Button>
                        <AiOutlineShoppingCart cursor={'pointer'} onClick={() => navigate(BASKET_ROUTE)} className='ms-4' fontSize={34} />
                    </Nav>

                }
            </Container>
        </Navbar>
    )
});

export default NavBar