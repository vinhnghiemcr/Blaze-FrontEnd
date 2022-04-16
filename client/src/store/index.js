import { createStore, combineReducers } from 'redux'
import UserReducer from './reducers/UserReducer'
import StateReducer from './reducers/StateReducer'

const store = createStore(
  combineReducers({
    userState: UserReducer,
    locationState: StateReducer
  }),
  composeWithDevTools(applyMidleware(thuk))
)

export default store