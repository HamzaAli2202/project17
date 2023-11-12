export const prodDetailsReducer = (state = {
    pdetails: ""
}, action) => {
    switch (action.type) {
        case "P_DETAILS":
            return {
                ...state,
                pdetails: action.payload
            }
    }
    return state
}