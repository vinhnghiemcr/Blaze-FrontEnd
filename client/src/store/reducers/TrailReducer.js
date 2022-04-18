const {
  GET_TRAIL,
  CREATE_TRAIL,
  REMOVE_TRAIL,
  UPDATE_NEW_TRAIL_FORM
} = require('../types')

const iState = {
  trail: {},
  newTrail: {
    name: '',
    img: '',
    location: '',
    difficulty: '',
    length: 0,
    elevationChange: 0,
    routeType: '',
    stateName: ''
  }
}

const TrailReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_TRAIL:
      return { ...state, trail: action.payload }
    case CREATE_TRAIL:
      return { ...state, newTrail: action.payload }
    case REMOVE_TRAIL:
      return { ...state }
    case UPDATE_NEW_TRAIL_FORM:
      return { ...state, newTrail: { ...state.newTrail, ...action.payload } }
    default:
      return { ...state }
  }
}

export default TrailReducer
