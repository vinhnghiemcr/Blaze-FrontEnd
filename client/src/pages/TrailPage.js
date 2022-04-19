import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {
  GetTrailById,
  ToggleShouldUpdateTrail,
  DeleteTrail
} from '../store/actions/TrailActions'
import Post from '../components/Post'
import MapWrapper from '../components/MapWrapper'
import TrailForm from '../components/TrailForm'

const mapStateToProps = ({ userState, trailState, postState }) => {
  return { userState, trailState, postState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTrail: (trailId) => dispatch(GetTrailById(trailId)),
    toggleShouldUpdateTrail: () => dispatch(ToggleShouldUpdateTrail()),
    deleteTrail: (trailId, userId) => dispatch(DeleteTrail(trailId, userId))
  }
}

const TrailPage = (props) => {
  let { trailId } = useParams()

  let navigate = useNavigate()

  useEffect(() => {
    props.fetchTrail(trailId)
  }, [])

  const renderEditForm = () => {
    props.toggleShouldUpdateTrail()
  }

  const deleteTrail = () => {
    props.deleteTrail(trailId, props.userState.user.id)
    navigate(-1)
  }

  return (
    <div>
      <div>
        <h2>{props.trailState.trail.name}</h2>
        <img
          className="trailImg"
          src={props.trailState.trail.img}
          alt={props.trailState.trail.name}
        />
        <h4>{props.trailState.trail.description}</h4>
        {props.trailState.shouldUpdateTrail && <TrailForm />}
        {props.trailState.trail.userId === props.userState.user.id && (
          <div>
            <button onClick={renderEditForm}>
              {props.trailState.shouldUpdateTrail
                ? 'Hide Form'
                : 'Update Trail'}
            </button>
            <button onClick={deleteTrail}>Delete</button>
          </div>
        )}
      </div>
      <div>
        {props.postState.posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      {/* <MapWrapper trailId={trailId} /> */}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TrailPage)
