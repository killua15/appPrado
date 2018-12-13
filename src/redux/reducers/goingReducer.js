const INITIAL_STATE = {
    data: [],
    isFeching: false,
    error: false,
}
export default goingReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case 'going':
            return {
                ...state,
                data: [],
                isFeching: true
            }
        case 'going_data_succsess':
            return {
                ...state,
                data: action.data,
                isFeching: false
            }
        case 'going_data_error':
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