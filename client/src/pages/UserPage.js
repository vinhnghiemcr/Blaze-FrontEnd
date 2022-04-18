import { connect } from 'react-redux'
import { GetUserPosts, ToggleCreatingPost, ToggleCreatingTrail } from '../store/actions/UserActions'
import { useEffect } from 'react'
import Post from '../components/Post'
import PostForm from '../components/PostForm'
import TrailForm from '../components/TrailForm'

const mapStateToProps = ({ userState }) => {
  return { userState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (userId) => dispatch(GetUserPosts(userId)),
    toggleCreatingPost: (value) => dispatch(ToggleCreatingPost(value)),
    toggleCreatingTrail: (value) => dispatch(ToggleCreatingTrail(value))
  }
}

const UserPage = (props) => {
  const { user, posts, creatingPost, creatingTrail } = props.userState
  useEffect(() => {
    props.fetchPosts(props.userState.user.id)
  }, [creatingPost, creatingTrail])

const addPost = () => {
    props.toggleCreatingPost(true)
}
const addTrail = () => {
    props.toggleCreatingTrail(true)
}
  return (
    <div>
        <h1>{user.trailName}</h1>
        { creatingPost ?
            <PostForm /> :
            <button onClick={addPost}>Add Post</button>}
        { creatingTrail ?
            <TrailForm /> :
            <button onClick={addTrail}>Add Trail</button>}
      
      {posts.length === 0
        ? 'Post something man'
        : posts.map((post) => <Post key={post.id} post={post} />)}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)
