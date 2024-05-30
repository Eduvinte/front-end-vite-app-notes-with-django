import '../styles/contact.css'
import { useState } from 'react'
const Contact = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [mensaje, setMensaje] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('Registrando...', name, email, mensaje)
    }

    
    return (
        <div className='container-contact'>
        <form onSubmit={(e) => handleSubmit(e)} className='form-contact'>
          <h1 className='title-contact'>Contacto</h1>
          <input type='text' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Escriba tu mensaje' />
          <input type='text' onChange={(e) => setName(e.target.value)} value={name} placeholder='Escriba tu nombre' />

          <textarea type='text' onChange={(e) => setMensaje(e.target.value)} value={mensaje} placeholder='Escriba tu mensaje' />
          <button type='submit'>Registrar</button>
        </form>
      </div>
    )
}

export default Contact