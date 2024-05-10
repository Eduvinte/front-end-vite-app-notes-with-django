import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

export const GetNotes = createAsyncThunk('notes/getNotes', async (payload) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}api/notes/?user=${payload}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
    }

})

const notesSlice = createSlice({
    name: 'notes',
    initialState: { notes: [], loading: false, error: null },
    extraReducers: (builder) => {
        builder.addCase(GetNotes.pending, (state, action) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(GetNotes.fulfilled, (state, action) => {
            state.notes = action.payload
            state.loading = false
        })
        builder.addCase(GetNotes.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false
        })
    }
})

export default notesSlice.reducer

