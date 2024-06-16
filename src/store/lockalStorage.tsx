export const loadState = () => {
    try {
        
        const serialazedState: string | null = localStorage.getItem("state")
        if (serialazedState === null) return undefined;
        return JSON.parse(serialazedState)
    }

    catch(err) {
            console.log(err)
            return undefined
    }
}

export const saveState = (state) => {
    try {
        const serialazedState = JSON.stringify(state)
        localStorage.setItem("state", serialazedState)
    }

    catch(err) {
            console.log(err)
    }
}