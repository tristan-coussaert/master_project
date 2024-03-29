import React, {useContext, useState} from 'react'
import {GlobalState} from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { AiOutlineShopping } from 'react-icons/ai'
import { ThemeContext } from '../../ThemeContext'

function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [error] = state.userAPI.error
    const [cart] = state.userAPI.cart
    const [menu, setMenu] = useState(false)
    const {theme} = useContext(ThemeContext);

    const logoutUser = async () =>{
        await axios.get('/user/logout')
        
        localStorage.removeItem('firstLogin')
        
        window.location.href = "/";
    }

    const adminRouter = () =>{
        return(
            <>
                <li><Link to="/create_product">Créer un produit</Link></li>
                <li><Link to="/category">Créer une catégorie</Link></li>
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
                <li><Link to="/history">Historique</Link></li>
                <li><Link to="/" onClick={logoutUser}>Déconnexion</Link></li>
            </>
        )
    }


    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <header className={theme ? 'contenu light' : 'contenu dark'}>
            <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="30" />
            </div>

            <div className={theme ? 'contenu light logo' : 'contenu dark logo'}>
                <h1>
                    <Link to="/">{isAdmin ? 'Admin' : 'Tech Shop'}</Link>
                </h1>
            </div>

            {error && <div className="error">{error}</div>}

            <ul style={styleMenu}>
                
                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <li><Link to="/login">Connexion ✥ Créer un compte</Link></li>
                }

                <li onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>

            </ul>

            {
                isAdmin ? '' 
                :<div className="cart-icon">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                    <AiOutlineShopping />
                    </Link>
                </div>
            }
            
        </header>
    )
}

export default Header
