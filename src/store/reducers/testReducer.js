const initialState = {
    counter: 0,
}


const testReducer = (state = { ...initialState }, { type, payload }) => {
    switch (type) {
        case "INCREMENT_COUNTER":
            return {
                ...state,
                counter: ++state.counter
            }
        case "DECREMENT_COUNTER":
            return {
                ...state,
                counter: --state.counter
            }
        case "SET_COUNTER":
            return {
                ...state,
                counter: payload
            }
        case "RESET_COUNTER":
            return {
                ...state,
                ...initialState
            }
        default:
            return state
    }
}

export default testReducer