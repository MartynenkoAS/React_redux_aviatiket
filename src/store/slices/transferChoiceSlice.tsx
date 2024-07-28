import { createSlice } from "@reduxjs/toolkit";



const transferChoiceSlice = createSlice({
    name: "transferChoice",
    initialState: {withoutTrans: true, oneTrans: true, twoTrans: true, threeTrans: true },
    reducers: {
        withoutTransToggle: (state) => {state.withoutTrans = !state.withoutTrans},
        oneTransToggle:     (state) => {state.oneTrans     = !state.oneTrans},
        twoTransToggle:     (state) => {state.twoTrans     = !state.twoTrans},
        threeTransToggle:   (state) => {state.threeTrans   = !state.threeTrans},
    },
    
})


export const {withoutTransToggle, oneTransToggle, twoTransToggle, threeTransToggle} = transferChoiceSlice.actions;

export default transferChoiceSlice;