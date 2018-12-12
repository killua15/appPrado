const INITIAL_STATE = {
    data: [],
    isFeching: false,
    error: false,
}
export default loginReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case 'register':
            return {
                ...state,
                data: [],
                isFeching: true
            }
        case 'register_data_succsess':
            return {
                ...state,
                data: action.data,
                isFeching: false
            }
        case 'register_data_error':
            return {
                ...state,
                data: action.data,
                isFeching: false,
                error:true
            }
        default:
            return state
    }
}