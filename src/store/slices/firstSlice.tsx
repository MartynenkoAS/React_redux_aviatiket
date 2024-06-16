import { createSlice } from "@reduxjs/toolkit";


const transferChoiceSlice = createSlice({
    name: "transferChoice",
    initialState: false,
    reducers: {
        tranferToggle: (state) => {console.log(state); return !state;},

    },
    
})

export const {tranferToggle} = transferChoiceSlice.actions

export default transferChoiceSlice.reducer