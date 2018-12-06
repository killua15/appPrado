const INITIAL_STATE = {
    data: [],
    isFeching: false,
    error: false,
}
export default loginReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case 'login':
            return {
                ...state,
                data: [],
                isFeching: true
            }
        case 'login_data_succsess':
            return {
                ...state,
                data: action.data,
                isFeching: false
            }
        case 'login_data_error':
            return {
                ...state,
                data: action.data._bodyInit,
                isFeching: false,
                error:true
            }
        default:
            return state
    }
}