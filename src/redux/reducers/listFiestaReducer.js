const INITIAL_STATE = {
    data: [],
    isFeching: false,
    error: false,
}
export default loginReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case 'list_fiesta':
            return {
                ...state,
                data: [],
                isFeching: true
            }
        case 'list_fiesta_data_succsess':
            return {
                ...state,
                data: action.data,
                isFeching: false
            }
        case 'list_fiesta_data_error':
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