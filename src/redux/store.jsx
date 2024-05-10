import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Auth";
import notesSlice from "./GetNotes";
const store = configureStore({
    reducer: {
       Auth: AuthSlice,
       notes: notesSlice
    }
})

export default store;


