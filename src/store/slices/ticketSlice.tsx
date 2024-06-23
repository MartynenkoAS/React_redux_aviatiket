import { createSlice } from "@reduxjs/toolkit";
import { Ticket }      from '../../components/mockTiketData.ts';
import mainTicketsData from '../../components/mockTiketData.ts';

// type initialStateType = {data: Ticket[], filerData: Ticket[]};

const initialState: {data: Ticket[], filterData: Ticket[]} = {data: mainTicketsData, filterData: mainTicketsData};

const tiketSlice = createSlice({
    name: "TiketData",
    initialState,
    reducers: {
    },
})


// export const {} = TiketSlice.actions;

export default tiketSlice;