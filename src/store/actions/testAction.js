const incrementCounter = () => {
    return {
        type: "INCREMENT_COUNTER"
    }
}

const decrementCounter = () => {
    return {
        type: "DECREMENT_COUNTER"
    }
}

const setCounter = (payload) => {
    return {
        type: "SET_COUNTER",
        payload
    }
}

const resetCounter = () => {
    return {
        type: "RESET_COUNTER"
    }
}

export {
    incrementCounter,
    decrementCounter,
    setCounter,
    resetCounter
}