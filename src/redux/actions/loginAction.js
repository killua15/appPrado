import apiLogin from '../apiPrado/apiLogin'
//import getDataFromDatabaseFilter from '../apiDB/apiCarFilter'
export const Login = data => {
    return {
        type: 'login'
    }
}
export const LoginSuccsess = data => {
    return {
        type: 'login_data_succsess',
        data
    }
}
export const LoginError = data => {
    return {
        type: 'login_data_error',
        data
        
    }
}

export const loginAction = (u,p) => {
    return (dispatch) => {
        dispatch(Login())
         apiLogin(u,p)
        .then((json) => { dispatch(LoginSuccsess(json)) })
        .catch((err)=>dispatch(LoginError(err)))

    }
}