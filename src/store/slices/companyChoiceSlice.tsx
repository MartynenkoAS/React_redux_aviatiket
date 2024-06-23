import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {[key: string]: boolean};

const initialState: initialStateType = {};

const companyChoiceSlice = createSlice({
    name: "companyChoice",
    initialState,
    reducers: {
        reducerInitCompany:   (state, action) => {state[action.payload] = false},
        reducerToggleCompany: (state, action) => {state[action.payload] = !state[action.payload]},
    },
})


export const {reducerToggleCompany, reducerInitCompany} = companyChoiceSlice.actions;

export default companyChoiceSlice;