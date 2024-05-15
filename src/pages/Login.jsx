import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Auth } from '../redux/Auth'
import { useNavigate } from 'react-router-dom'
import "../styles/Login.css"
function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const user = useSelector((state) => state.Auth.user)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(Auth({username, password}))    
  }

 
  return (
    <div className='container-login'>
      <form onSubmit={handleSubmit} className='form-login'>
        <input type='text' onChange={(e) => setUsername(e.target.value)} value={username} placeholder='Usuario' />
        <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Contraseña' />
        <button type='submit'>Entrar</button>
      </form>
    </div>
  )
}

export default Login
