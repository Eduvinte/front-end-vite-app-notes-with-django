import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import App from './App'
import Login from './pages/Login'
import CreateNotes from './pages/CreateNotes'
import ProtectRoutes from './componentes/ProtectRoutes'

const Router = () => {
    return (
    <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create-notes' element={ <ProtectRoutes><CreateNotes /></ProtectRoutes> } />
    </Routes>
    )
}

export default Router

