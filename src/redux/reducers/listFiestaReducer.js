const INITIAL_STATE = {
    data: [],
    isFeching: true,
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
        console.log(action.data)
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