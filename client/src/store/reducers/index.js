import UserReducer from './UserReducer'
import StateReducer from './StateReducer'
import PostReducer from './PostReducer'
import TrailReducer from './TrailReducer'
import CommentReducer from './CommentReducer'
import {  combineReducers } from 'redux'

const rootReducer  = combineReducers({
    userState: UserReducer,
    locationState: StateReducer,
    postState: PostReducer,
    trailState: TrailReducer,
    commentState: CommentReducer
})

export default rootReducer