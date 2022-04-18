import { connect } from "react-redux"
import { CreateNewTrail, UpdateTrailForm } from '../store/actions/TrailActions'
import { ToggleCreatingTrail } from '../store/actions/UserActions'

const mapStateToProps = ({ userState, trailState }) => {
  return { userState, trailState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTrail: (userId, data) => dispatch(CreateNewTrail(userId,data)),
    updateTrailForm: (data) => dispatch(UpdateTrailForm(data)),
    toggleCreatingTrail: (value) => dispatch(ToggleCreatingTrail(value))
  }
}

const TrailForm = (props) => {
  let userId = props.userState.user.id

  const handleChange = (e) => {
    props.updateTrailForm({[e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.createTrail(userId, props.trailState.newTrail)
    props.toggleCreatingTrail(false)
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label>Trail Name</label>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Enter trail name..."
            value={props.trailState.newTrail.name}
            required
           />
        </div>
        <div className="input-wrapper">
          <label>Photo of trail</label>
          <input
            onChange={handleChange}
            name="img"
            type="text"
            placeholder="Enter image path..."
            value={props.trailState.newTrail.img}
           />
        </div>
        <div className="input-wrapper">
          <label>Location</label>
          <input
            onChange={handleChange}
            name="location"
            type="text"
            placeholder="Enter location..."
            value={props.trailState.newTrail.location}
            required
           />
        </div>
        <div className="input-wrapper">
          <label>State Name</label>
          <input
            onChange={handleChange}
            name="stateName"
            type="text"
            placeholder="Enter state name..."
            value={props.trailState.newTrail.stateName}
            required
           />
        </div>
        <div className="input-wrapper">
          <label>Difficulty</label>
          <input
            onChange={handleChange}
            name="difficulty"
            type="text"
            placeholder="Enter trail difficulty..."
            value={props.trailState.newTrail.difficulty}
          />
        </div>
        <div className="input-wrapper">
          <label>Length</label>
          <input
            onChange={handleChange}
            name="length"
            type="text"
            placeholder="Enter trail length..."
            value={props.trailState.newTrail.length}
          />
        </div>
        <div className="input-wrapper">
          <label>Elevation Change</label>
          <input
            onChange={handleChange}
            name="elevationChange"
            type="text"
            placeholder="Enter elevation change..."
            value={props.trailState.newTrail.elevationChange}
          />
        </div>
        <div className="input-wrapper">
          <label>Route Type</label>
          <input
            onChange={handleChange}
            name="routeType"
            type="text"
            placeholder="Enter route type..."
            value={props.trailState.newTrail.routeType}
          />
        </div>
        <button disabled={!props.trailState.newTrail.name || !props.trailState.newTrail.location || !props.trailState.newTrail.stateName}>
           Create Trail
        </button>
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TrailForm)