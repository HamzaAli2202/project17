export const productReducer = (state = {
    mycat: "",
    filtprod: []
}, action) => {
    switch (action.type) {
        case "ADD_CAT":
            return {
                ...state,
                mycat: action.payload
            }
            case "ADD_PROD":
                return {
                    ...state,
                    filtprod: [action.payload, ...state.filtprod]
                }
                default:
                    return state;
    }
    return state;
}