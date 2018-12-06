import { combineReducers } from 'redux'
import LoginReducer from './loginReducer'
import ListFiestaReducer from './listFiestaReducer'


export default function getRootReducer(navReducer){
  return combineReducers({
    nav:navReducer,
    login:LoginReducer,
    fiestas:ListFiestaReducer

})
}
