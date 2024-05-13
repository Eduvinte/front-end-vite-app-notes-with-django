import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Auth";
import notesSlice from "./GetNotes";
import DeleteNoteSlice from "./DeleteNote";
const store = configureStore({
    reducer: {
       Auth: AuthSlice,
       notes: notesSlice,
       DeleteNote: DeleteNoteSlice
    }
})

export default store;


