import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CreateNote } from "../redux/CreateNote";
import { Auth } from "../redux/Auth";
import { GetNotes } from "../redux/GetNotes";
import '../styles/createNotes.css'
const CreateNotes = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [showCreateNote, setShowCreateNotes] = useState(false)

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

  return (
    <div className='container-create-notes'>

      <div className="container-btn-close">
        <p className="btn-close" onClick={() => setShowCreateNotes(!showCreateNote)}>X</p>
      </div>

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
                  <button className='button-edit'>Editar</button>
                  <button className='button-delete'>Eliminar</button>
                </div>
                <h3 className='title-note'>{note.title}</h3>
                <p className='description-note'>{note.description}</p>
              </div>
            )
          })
        }
      </div>

    </div>
  )
};

export default CreateNotes;

