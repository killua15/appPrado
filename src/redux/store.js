import {createStore, applyMiddleware} from 'redux'
import getRootReducers from './reducers'
import thunk from 'redux-thunk'

export default configurationStore = (navReducer) =>{
    let store = createStore(getRootReducers(navReducer),applyMiddleware(thunk))
    return store
}