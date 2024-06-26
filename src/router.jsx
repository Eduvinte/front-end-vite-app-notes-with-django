import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import App from './App'
import Login from './pages/Login'
import CreateNotes from './pages/CreateNotes'
import ProtectRoutes from './componentes/ProtectRoutes'
import RegisterUser from './pages/RegisterUser'
import Contact from './pages/Contact'

const Router = () => {
    return (

    <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create-notes' element={ <ProtectRoutes><CreateNotes /></ProtectRoutes> } />
        <Route path='/register-user' element={ <RegisterUser /> } />
        <Route path='/contact' element={ <Contact /> } />
    </Routes>
    )

}

export default Router

