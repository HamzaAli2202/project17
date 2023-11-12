export const pcartReducer = (state = {
    cart: []
}, action) => {
    switch (action.type) {
        case "ADD_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
            case "REMOVE":
                const filt = state.cart.filter((item, index) => index !== action.payload)
                return {

                    cart: filt
                }
                return state
    }
    return state
}