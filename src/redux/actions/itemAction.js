import apiItem from '../apiPrado/apiItem'
export const ItemFiesta = data => {
    return {
        type: 'item_fiesta'
    }
}
export const ItemFiestaSuccsess = data => {
    console.log(data)
    return {
        type: 'item_fiesta_data_succsess',
        data
    }
}
export const ItemFiestaError = data => {
    return {
        type: 'item_fiesta_data_error',
        data
    }
}

export const itemAction = (id,t) => {
    return (dispatch) => {
        dispatch(ItemFiesta())
        console.log(t)
         apiItem(id,t)
        .then((json) => { dispatch(ItemFiestaSuccsess(json)) })
        .catch((err)=>dispatch(ItemFiestaError(err)))

    }
}