import { configureStore }       from "@reduxjs/toolkit";
import toggleSlice              from "./slices/firstSlice";
import { loadState, saveState } from "./lockalStorage";

const preloadedState = loadState()

const store = configureStore({
    reducer: {
        withoutTrans: toggleSlice,
        oneTrans:     toggleSlice,
        twoTrans:     toggleSlice,
        threeTrans:   toggleSlice,
    },
    preloadedState,
    })

store.subscribe(() => {
    saveState(store.getState());
})

export default store