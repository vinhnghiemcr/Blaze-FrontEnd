const { GET_TRAILS, NEW_TRAIL, REMOVE_TRAIL } = require('../types')

const iState = {
  trails: [],
  newTrail: ''
}

const TrailReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_TRAILS:
      return { ...state, trails: [...action.payload] }
    case NEW_TRAIL:
      return { ...state, newTrail: action.payload }
    case REMOVE_TRAIL:
      state.trails.splice(action.payload, 1)
      return { ...state, trails: state.trails }
    default:
      return { ...state }
  }
}

export default TrailReducer
