import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import UserReducer from './reducers/UserReducer'
import StateReducer from './reducers/StateReducer'
import PostReducer from './reducers/PostReducer'

const store = createStore(
  combineReducers({
    userState: UserReducer,
    locationState: StateReducer,
    postState: PostReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
