import apiList from '../apiPrado/apiList'
export const ListFiesta = data => {
    return {
        type: 'list_fiesta'
    }
}
export const ListFiestaSuccsess = data => {
    return {
        type: 'list_fiesta_data_succsess',
        data
    }
}
export const ListFiestaError = data => {
    return {
        type: 'list_fiesta_data_error',
        data
    }
}

export const fiestaAction = () => {
    return (dispatch) => {
        dispatch(ListFiesta())
         apiList()
        .then((json) => { dispatch(ListFiestaSuccsess(json)) })
        .catch((err)=>dispatch(ListFiestaError(err)))

    }
}