import { combineReducers } from 'redux'
//import TaxisReducer from './TaxisReducers'


export default function getRootReducer(navReducer){
  return combineReducers({
    nav:navReducer,
   // taxis:TaxisReducer
})
}
