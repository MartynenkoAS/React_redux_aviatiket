import { createSlice } from "@reduxjs/toolkit";
import { Ticket }      from '../../components/mockTiketData.ts';
import mainTicketsData from '../../components/mockTiketData.ts';

// type initialStateType = {data: Ticket[], filerData: Ticket[]};

const initialState: {data: Ticket[], filterData: Ticket[]} = {data: mainTicketsData, filterData: mainTicketsData};

const tiketSlice = createSlice({
    name: "ticketData",
    initialState,
    reducers: {
        filterTickets: (state) => {
            
            
        }
    },
})


// export const {} = TiketSlice.actions;

export const {filterTickets} = tiketSlice.actions;

export default tiketSlice;