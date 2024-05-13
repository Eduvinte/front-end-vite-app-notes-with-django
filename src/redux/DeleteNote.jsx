import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GetNotes } from '../redux/GetNotes'
import axios from 'axios'
import { toast } from 'react-toastify'

export const DeleteNote = createAsyncThunk(
    'DeleteNote',
     async (payload, thunkAPI) => {
        try {
            const response = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}api/notes/delete/${payload}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            thunkAPI.dispatch(GetNotes())
            toast.success('!Nota eliminada con exito!')
            console.log(response)
            return response.data
        } catch (error) {

        }
    }
)

const DeleteNoteSlice = createSlice({
    name: 'DeleteNoteSlice',
    initialState: { loading: false, data: [], error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(DeleteNote.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(DeleteNote.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload
        })
        builder.addCase(DeleteNote.rejected, (state, action) => {
            state.loading = false,
            state.error = action.payload
        })
    }
    
})

export default DeleteNoteSlice.reducer