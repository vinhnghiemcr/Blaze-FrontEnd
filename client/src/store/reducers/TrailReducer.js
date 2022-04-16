const { GET_TRAILS } = require('../types')

const iState = {
  trails: []
}

const TrailReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_TRAILS:
      return { ...state, trails: [...action.payload] }
    default:
      return { ...state }
  }
}

export default TrailReducer
