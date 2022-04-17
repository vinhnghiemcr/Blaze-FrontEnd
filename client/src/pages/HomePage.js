import { connect } from 'react-redux'
import { LoadStates } from '../store/actions/StateActions'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import State from '../components/State'
import '../styles/App.css'

const mapStateToProps = ({ locationState }) => {
  return { locationState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocations: () => dispatch(LoadStates())
  }
}

const HomePage = (props) => {
  useEffect(() => {
    props.fetchLocations()
  }, [])

  console.log(props.locationState, 'LocationState')
  return (
    <div className="home">
      {props.locationState.states.map((state) => (
        <Link to={`state/${state.id}`}>
          <State key={state.id} state={state} />
        </Link>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
