import { connect } from 'react-redux'
import { LoadStates } from '../store/actions/StateActions'
import { useEffect } from 'react'
import State from '../components/State'

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
        <State key={state.id} state={state} />
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
