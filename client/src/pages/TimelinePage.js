import { useEffect } from 'react'
import { GetPostsFromFollowingUsers } from '../store/actions/PostActions'
import Post from '../components/Post'
import { connect } from 'react-redux'

const mapStateToProps = ({ userState, postState }) => {
  return { userState, postState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (userId) => dispatch(GetPostsFromFollowingUsers(userId))
  }
}

const TimelinePage = (props) => {
  useEffect(() => {
    props.fetchPosts(props.userState.id)
  }, [])

  return (
    <div>
      <h1>Timeline</h1>
      <div className="timeline">
        {props.postState.followingUserPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TimelinePage)
