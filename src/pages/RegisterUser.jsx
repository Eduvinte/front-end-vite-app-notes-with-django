import Modal from '../componentes/Modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RegisterUserThunk } from '../redux/RegisterUser';

const RegisterUser = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(RegisterUserThunk({ username, password }))
    }

    return (
        <div className='container-login'>
        <form onSubmit={(e) => handleSubmit(e)} className='form-login'>
          <input type='text' onChange={(e) => setUsername(e.target.value)} value={username} placeholder='Usuario' />
          <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Contraseña' />
          <button type='submit'>Registrar</button>
        </form>
      </div>
    )

   
  
};

export default RegisterUser;

