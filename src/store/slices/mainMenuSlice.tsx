import { createSlice } from "@reduxjs/toolkit";


const mainMenuSlice = createSlice({
    name: "mainMenuChoice",
    initialState: {setIsCheap: true, setIsFast: false, setIsOptimal: false },
    reducers: {
        setIsCheapToggle:   (state) => { state.setIsCheap = true;  state.setIsFast = false; state.setIsOptimal = false },
        setIsFastToggle:    (state) => { state.setIsCheap = false; state.setIsFast = true;  state.setIsOptimal = false },
        setIsOptimalToggle: (state) => { state.setIsCheap = false; state.setIsFast = false; state.setIsOptimal = true },
    },
    
})


export const {setIsCheapToggle, setIsFastToggle, setIsOptimalToggle} = mainMenuSlice.actions;

export default mainMenuSlice;