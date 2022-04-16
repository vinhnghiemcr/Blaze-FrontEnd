import { createStore, combineReducers } from 'redux'
import UserReducer from './reducers/UserReducer'
// import ProductReducer from './reducers/ProductReducer'

const store = createStore(
  combineReducers({
    userState: UserReducer,
    // productState: ProductReducer
  }),
  composeWithDevTools(applyMidleware(thuk))
)

export default store