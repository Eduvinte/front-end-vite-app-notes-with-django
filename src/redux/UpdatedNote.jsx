import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify"; 
import { GetNotes } from "./GetNotes";

 export const UpdateNote = createAsyncThunk(
    'UpdateNote',
    async (payload, thunkAPI) => {
        console.log(payload)
        try {
            const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}api/notes/update/${payload.idUser}`, {title: payload.title, description: payload.description}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            toast.success("Nota editada con exito")
            thunkAPI.dispatch(GetNotes())
            return response
        } catch (error) {
            console.log(error)
        }
    }
 )