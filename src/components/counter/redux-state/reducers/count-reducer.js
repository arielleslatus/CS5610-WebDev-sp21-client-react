const initialState = {
    count: 234
}

const CountReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case "UP":
            return {
                count: prevState.count + 1
            }
        case "DOWN":
            return {
                count: prevState.count - 1
            }
        case "CLEAR": {
            return {
                count: 0
            }
        }

        default:
            return prevState
    }
}

export default CountReducer