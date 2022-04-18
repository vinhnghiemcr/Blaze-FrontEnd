import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GetPostByTrailId } from '../store/actions/PostActions'
import Post from '../components/Post'

const mapStateToProps = ({ trailState, postState }) => {
  return { trailState, postState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (trailId) => dispatch(GetPostByTrailId(trailId))
  }
}

const TrailPage = (props) => {
  let { trailId } = useParams()

  useEffect(() => {
    props.fetchPosts(trailId)
  }, [])

  return (
    <div>
      {props.postState.posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TrailPage)
