import '../styles/Modal.css'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { UpdateNote } from '../redux/UpdatedNote'
const Modal = (value) => {
    
    const disptach = useDispatch()

    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')

    const handleSubmitModal = (e) => {
        e.preventDefault()
        disptach(UpdateNote({idUser: value.idNote, title: title, description: description}))
    }

    return (
        <div>
            <div className='container-login-modal' style={{ display: value.setShowModal ? 'flex' : 'none' }}>
                <form onSubmit={(e) => handleSubmitModal(e)} className='form-login-modal'>
                    <input type='text' onChange={(e) => setTitle(e.target.value)} value={title} placeholder='Nuevo titulo' />
                    <input type='text-area' onChange={(e) => setDescription(e.target.value)} value={description} placeholder='Nueva description' />
                    <button type='submit'>Entrar</button>
                </form>
            </div>
        </div>
    )
}

export default Modal