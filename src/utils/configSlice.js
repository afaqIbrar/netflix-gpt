import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: 'config',
    initialState: {
        lang: 'en'
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload
        },
        resetLanguage: (state) => {
            state.lang = 'en'
        }
    }
});
export const { changeLanguage, resetLanguage } = configSlice.actions;
export default configSlice.reducer;