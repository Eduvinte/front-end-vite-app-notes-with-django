import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const RegisterUserThunk = createAsyncThunk(
    'registerUser',
     async (payload) => {
        try {
            console.log(payload)
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}api/user/register`, payload)
            toast.success('Usuario registrado')
            console.log(response.data)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
)


