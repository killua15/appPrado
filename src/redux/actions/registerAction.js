import apiRegister from '../apiPrado/apiRegister'
//import getDataFromDatabaseFilter from '../apiDB/apiCarFilter'
export const Register = data => {
    return {
        type: 'register'
    }
}
export const RegisterSuccsess = data => {
    return {
        type: 'register_data_succsess',
        data
    }
}
export const RegisterError = data => {
    return {
        type: 'register_data_error',
        data
        
    }
}

export const registerAction = (name,idDoc,pass ,birth,email,prCode,mobile,gender) => {
    
    return (dispatch) => {
        dispatch(Register())
        apiRegister(name,idDoc, pass,birth,email,prCode,mobile,gender)
        .then((json) => { dispatch(RegisterSuccsess(json)) })
        .catch((err)=>dispatch(RegisterError(err)))

    }
}