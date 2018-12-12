import { combineReducers } from 'redux'
import LoginReducer from './loginReducer'
import RegisterReducer from './registerReducer'
import ListFiestaReducer from './listFiestaReducer'
import ItemFiestaReducer from './itemFiestaReducer'


export default function getRootReducer(navReducer){
  return combineReducers({
    nav:navReducer,
    login:LoginReducer,
    register:RegisterReducer,
    fiestas:ListFiestaReducer,
    itemFiesta:ItemFiestaReducer

})
}
