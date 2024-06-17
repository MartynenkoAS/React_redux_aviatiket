import { configureStore }       from "@reduxjs/toolkit";
import transferChoiceSlice      from "./slices/transferChoiceSlice";
import companyChoiceSlice       from "./slices/companyChoiceSlice";
import mainMenuSlice            from "./slices/mainMenuSlice";
import { loadState, saveState } from "./lockalStorage";

const preloadedState = loadState()

const store = configureStore({
    reducer: {
        transferChoice : transferChoiceSlice.reducer,
        companyChoice  : companyChoiceSlice.reducer,
        mainMenuChoice : mainMenuSlice.reducer,
    },
    preloadedState,
    })

store.subscribe(() => {
    saveState(store.getState());
})

export type RootStore = ReturnType <typeof store.getState>

export default store