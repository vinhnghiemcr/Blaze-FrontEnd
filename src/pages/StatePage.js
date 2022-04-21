import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { GetStateDetails } from '../store/actions/StateActions'
import Trail from '../components/Trail'

const mapStateToProps = ({ locationState }) => {
  return { locationState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStateDetails: (stateId) => dispatch(GetStateDetails(stateId))
  }
}

const StatePage = (props) => {
  let { stateId } = useParams()

  useEffect(() => {
    props.fetchStateDetails(stateId)
  }, [])

  return (
    <div className="state-wrapper">
      <h2 className="heading">{props.locationState.state.name}</h2>
      <hr />
      <img
        className="state-page-image"
        src={props.locationState.state.img}
        alt={props.locationState.state.name}
      />
      <h4 className="state-description">
        {props.locationState.state.description}
      </h4>
      <h1>Hiking Trails</h1>
      <div className="trails-wrapper">
        {props.locationState.trails.map((trail) => (
          <Link key={trail.id} to={`/trail/${trail.id}`}>
            <Trail {...trail} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(StatePage)
