import { createSlice } from "@reduxjs/toolkit";


const companyChoiceSlice = createSlice({
    name: "companyChoice",
    initialState: {companyToggle: true},
    reducers: {
        reducerForCompany: (state, action) => {state.companyToggle = !state.companyToggle; console.log(action)},
    },
    
})


export const {reducerForCompany} = companyChoiceSlice.actions;

export default companyChoiceSlice;