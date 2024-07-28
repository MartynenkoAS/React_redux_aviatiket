import { createSlice } from "@reduxjs/toolkit";
import { Ticket }      from '../../components/mockTiketData.ts';
import mainTicketsData from '../../components/mockTiketData.ts';

const initialState: {data: Ticket[]} = {data: []};

const tiketSlice = createSlice({
    name: "ticketData",
    initialState,
    reducers: {
        loadTickets: (state) => { state.data = mainTicketsData }            // тут загружаем билеты из mockTiketData.ts
    },
})

export const {loadTickets} = tiketSlice.actions;

export default tiketSlice;