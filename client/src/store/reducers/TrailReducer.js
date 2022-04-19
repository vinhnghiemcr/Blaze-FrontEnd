const {
  SET_TRAIL,
  CLEAR_TRAIL_FORM,
  REMOVE_TRAIL,
  UPDATE_NEW_TRAIL_FORM,
  POPULATE_TRAIL_FORM,
  TOGGLE_SHOULD_UPDATE_TRAIL,
  EDIT_TRAIL
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
  },
  shouldUpdateTrail: false
}

const TrailReducer = (state = iState, action) => {
  switch (action.type) {
    case SET_TRAIL:
      return { ...state, trail: action.payload }
    case CLEAR_TRAIL_FORM:
      return { ...state, newTrail: action.payload }
    case REMOVE_TRAIL:
      return { ...state }
    case UPDATE_NEW_TRAIL_FORM:
      return { ...state, newTrail: { ...state.newTrail, ...action.payload } }
    case POPULATE_TRAIL_FORM:
      return { ...state, newTrail: action.payload }
    case TOGGLE_SHOULD_UPDATE_TRAIL:
      return { ...state, shouldUpdateTrail: !state.shouldUpdateTrail }
    case EDIT_TRAIL:
      return { ...state, trail: action.payload }
    default:
      return { ...state }
  }
}

export default TrailReducer
