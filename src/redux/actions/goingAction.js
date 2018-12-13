import apiGoing from '../apiPrado/apiGoing'
//import getDataFromDatabaseFilter from '../apiDB/apiCarFilter'
export const Going = data => {
    return {
        type: 'going'
    }
}
export const GoingSuccsess = data => {
    return {
        type: 'going_data_succsess',
        data
    }
}
export const GoingError = data => {
    return {
        type: 'going_data_error',
        data
        
    }
}

export const goingAction = (cod_f,id_f) => {
    return (dispatch) => {
        dispatch(Going())
        apiGoing(cod_f,id_f)
        .then((json) => { dispatch(GoingSuccsess(json)) })
        .catch((err)=>dispatch(GoingError(err)))

    }
}