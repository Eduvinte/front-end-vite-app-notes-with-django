import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CreateNote } from "../redux/CreateNote";
import { Auth } from "../redux/Auth";
import { GetNotes } from "../redux/GetNotes";
import { DeleteNote } from "../redux/DeleteNote";
import Modal from "../componentes/Modal";
import '../styles/createNotes.css'
const CreateNotes = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [showCreateNote, setShowCreateNotes] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [idNote, setIdNote] = useState('')
  const notes = useSelector((state) => state.notes.notes)

  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('idUser')) {
      const idUser = localStorage.getItem('idUser')
      dispatch(GetNotes(idUser))
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(CreateNote({ title, description }))
  }

  const handleInfoModal = (id) => {
    setIdNote(id)
    setShowModal(!showModal)
  }
  return (
    <div className='container-create-notes'>

      <Modal 
        idNote={idNote}
        setShowModal={showModal}
      />

      {
        showCreateNote ?
          <div className="container-btn-close">
            <p className="btn-close" onClick={() => setShowCreateNotes(!showCreateNote)}>A</p>
          </div>
          :
          <div className="container-btn-close">
            <p className="btn-close" onClick={() => setShowCreateNotes(!showCreateNote)}>X</p>
          </div>
      }


      <div className='container-create' style={{ display: showCreateNote ? 'none' : 'flex' }}>
        <h2 className='title-create-notes'>Crear Notas</h2>
        <div className="container-btn-form" >

          <form onSubmit={handleSubmit} className='form-login-notes'>
            <input type='text' onChange={(e) => setTitle(e.target.value)} value={title} placeholder='Titulo de la nota' />
            <input type='text' onChange={(e) => setDescription(e.target.value)} value={description} placeholder='Descripcion de la nota' />
            <button type='submit'>Crear nota</button>
          </form>
        </div>
      </div>

      <div className='container-notes'>
        <h2 className='title-notes'>Todas las notas</h2>
        {
          notes.map((note) => {
            return (
              <div key={note.id} className='note'>
                <div className='container-buttons'>
                  <button className='button-edit' onClick={() => handleInfoModal(note.id)}>Editar</button>
                  <button className='button-delete' onClick={() => dispatch(DeleteNote(note.id))}>Eliminar</button>
                </div>
                <h3 className='title-note'>{note.title}</h3>
                <p className='description-note'>{note.description}</p>
              </div>
            )
          })
        }
      </div>

      <div className="bottom-closed" style={{ display: showModal ? 'flex' : 'none' }} onClick={() => setShowModal(!showModal)}>
        <p>X</p>
      </div>

    </div>
  )
};

export default CreateNotes;

