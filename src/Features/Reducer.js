export const Reducer = (state, action) =>{
    if(action.type === "Add"){
        return [...state, action.product]
    }
    else if(action.type === "Remove"){
        return state.filter(p => p.id !== action.id)
    }
    else if(action.type === "Increase"){
        const indexI = state.findIndex(p => p.id === action.id)
        state[indexI].quantity += 1
        return[...state]
    }
    else if(action.type === "Decrease"){
        const indexD = state.findIndex(p => p.id === action.id)
        state[indexD].quantity -= 1
        return[...state]
    }
}