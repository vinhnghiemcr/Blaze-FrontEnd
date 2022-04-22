import { useEffect } from 'react'
import { GetPostsFromFollowingUsers } from '../store/actions/PostActions'
import Post from '../components/Post'
import { connect } from 'react-redux'

import FriendList from '../components/FriendList'

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
    if (props.userState.authenticated) {
      props.fetchPosts(props.userState.user.id)
    }
  }, [])

  return (
    <div className='timeline-page'>
      {!props.userState.authenticated ? (
        <h1>Not authorized</h1>
      ) : (
        <div>
          <FriendList followingList={props.userState.followingList} />
          <h1 className="heading">Timeline</h1>
          <hr />
          <div className="timeline">
            {props.postState.followingUserPosts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TimelinePage)
