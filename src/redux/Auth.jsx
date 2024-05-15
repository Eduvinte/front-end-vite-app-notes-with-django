import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const Auth = createAsyncThunk(
    'auth/Auth',
    async (payload) => {
    try {
        console.log(payload)
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/token`, payload)
        window.location.href = '/create-notes'
        return response.data
    } catch (error) {
        console.log(error.response.data)
    }
}
)

const AuthSlice = createSlice({
    name: "Auth",
    initialState: { error: null, loading: false, token: null, refresh: null, user: false, idUser: null },
    reducers: {
        logout: () => {
            localStorage.removeItem('token')
            localStorage.removeItem('refresh')
            window.location.href = '/'
        }
    },
    extraReducers: (builder) => {
        builder.addCase(Auth.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(Auth.fulfilled, (state, action) => {
            state.token = action.payload.access
            state.refresh = action.payload.refresh
            localStorage.setItem('token', action.payload.access)
            localStorage.setItem('refresh', action.payload.refresh)
            state.user = true
            state.idUser = action.payload.user_id
            state.loading = false
        })
        builder.addCase(Auth.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false
        })
    }
})

export const { logout } = AuthSlice.actions
export default AuthSlice.reducer

