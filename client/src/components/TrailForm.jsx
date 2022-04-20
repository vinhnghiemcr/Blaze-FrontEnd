import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { CreateNewTrail, UpdateTrailForm, PopulateTrailForm, EditTrail, ToggleShouldUpdateTrail } from '../store/actions/TrailActions'
import { ToggleCreatingTrail } from '../store/actions/UserActions'

import Dropdown from '../components/Dropdown'

const allStates = [
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Federated States of Micronesia",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Marshall Islands",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Northern Mariana Islands",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Palau",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Island",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
]


const mapStateToProps = ({ userState, trailState }) => {
  return { userState, trailState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTrail: (userId, data) => dispatch(CreateNewTrail(userId,data)),
    updateTrailForm: (data) => dispatch(UpdateTrailForm(data)),
    toggleCreatingTrail: (value) => dispatch(ToggleCreatingTrail(value)),
    populateTrailForm: (formValues) => dispatch(PopulateTrailForm(formValues)),
    editTrail: (trailId, userId, formValues) => dispatch(EditTrail(trailId, userId, formValues)),
    toggleShouldUpdateTrail: () => dispatch(ToggleShouldUpdateTrail())
  }
}

const TrailForm = (props) => {
  let userId = props.userState.user.id
  const [state, setState] = useState("")

  useEffect(() => {
    if (props.trailState.shouldUpdateTrail) {
      props.populateTrailForm(props.trailState.trail)
    }
  }, [])

  const handleChange = (e) => {
    props.updateTrailForm({[e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (props.trailState.shouldUpdateTrail) {
      props.editTrail(props.trailState.trail.id, userId, props.trailState.newTrail)
      props.toggleShouldUpdateTrail()
    } else {
      props.createTrail(userId, props.trailState.newTrail)
      props.toggleCreatingTrail(false)
    }
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
        <div className="input-wrapper">
          <label>State Name</label>
          <input
            onChange={handleChange}
            name="stateName"
            type="text"
            placeholder="Enter state name..."
            value={state}
            required
           />
           <Dropdown setState={setState} list={allStates} />
        </div>
        <button disabled={!props.trailState.newTrail.name || !props.trailState.newTrail.location || !props.trailState.newTrail.stateName}>
           {props.trailState.shouldUpdateTrail ? 'Update Trail' : 'Create Trail'}
        </button>
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TrailForm)