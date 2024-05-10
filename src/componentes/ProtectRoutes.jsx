import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

const ProtectRoutes = ({ children }) => {

    
    const token = localStorage.getItem('token')

    if (!token) {
        return <Navigate to="/login" />
    }

    try {
        const decoded = jwtDecode(token)
        localStorage.setItem('idUser', decoded.user_id)
        const currentTime = Date.now() / 1000
        if (decoded.exp < currentTime) {
            localStorage.removeItem('idUser')
            localStorage.removeItem('token'); // Optional: clear token
            alert('Su sesion ha caducado, por favor inicie sesion nuevamente')
            return <Navigate to="/login" />
        }
    } catch (error) {
        console.log(error)
        return <Navigate to="/login" />
    }

    return children
}

export default ProtectRoutes

