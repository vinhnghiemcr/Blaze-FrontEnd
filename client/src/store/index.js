import { createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import UserReducer from './reducers/UserReducer'
import StateReducer from './reducers/StateReducer'


const store = createStore(
  combineReducers({
    userState: UserReducer,
    locationState: StateReducer
  }),
  composeWithDevTools(applyMidleware(thunk))
)

export default store