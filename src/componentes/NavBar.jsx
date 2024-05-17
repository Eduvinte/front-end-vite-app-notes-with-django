import '../styles/NavBar.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import logo from '../assets/logo.png'
import toggleMenu  from '../assets/toggle-menu.svg'
import { logout } from '../redux/Auth'

const NavBar = () => {

    const disptach = useDispatch()
    const [token, setToken] = useState(null)
    const [showNav, setShowNav] = useState(false)
    const user = useSelector(state => state.Auth.user)

    useEffect(() => {
        const tokenLocal = localStorage.getItem('token')
        if (tokenLocal) {
            setToken(tokenLocal)
        }
    }, [user])
    return (
        <div className='container'>
            <div className="container-nav-mobile">
                <h1><img src={logo} width={70} height={70} alt="logo" /></h1>
                <button onClick={() => setShowNav(!showNav)}>
                    <img src={toggleMenu} width={30} height={30} alt="toggle-menu" />
                </button>
            </div>
        
            <div className="container-nav" style={{display: showNav ? 'none' : 'block'}}>
                <ul className="container-nav-list">
                    <li><Link className="#" to="/">Inicio</Link></li>
                    {!token ? <li><Link className="btn-enter" to="/login">Entrar</Link></li> : null}
                    {!token ? <li><Link className="btn-register" to="/register-user">Registrar</Link></li> : null}
                    {token ? <li><Link className="btn-create-note" to="/create-notes">Crear Notas</Link></li> : null}
                    {token ? <li><Link to="/login" onClick={() =>disptach(logout())}>Salir</Link></li> : null}
                    <li><Link className="btn" to="/contact">Contacto</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar

