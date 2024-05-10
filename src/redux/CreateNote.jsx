import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import { toast } from 'react-toastify'
import { GetNotes } from './GetNotes'
import axios from "axios";

export const CreateNote = createAsyncThunk(
    'createNote',
    async ( payload, thunkAPI ) => {
        try {
            console.log(payload)
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}api/notes/`, payload, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            toast.success('Nota creada')
            thunkAPI.dispatch(GetNotes(payload))
            console.log(response.data)
            return response.data    
        } catch (error) {
            toast.error('Error al crear la nota', error)
            console.log(error)
        }
    }
)

const CreateNoteSlice = createSlice({
    name: 'createNote',
    initialState: {
        note: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {

        builder.addCase(CreateNote.pending, (state, action) => {
            state.note = null
            state.loading = true
            state.error = null
        })
        builder.addCase(CreateNote.fulfilled, (state, action) => {
            state.note = action.payload
            state.loading = false
            state.error = null
        })
        builder.addCase(CreateNote.rejected, (state, action) => {
            state.note = action.payload
            state.loading = false
            state.error = action.payload
        })
    }
})

export default CreateNoteSlice.reducer

