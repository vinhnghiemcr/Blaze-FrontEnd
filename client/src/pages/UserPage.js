import { connect } from 'react-redux'
import {
  SetUser,
  GetUserPosts,
  ToggleCreatingPost,
  ToggleCreatingTrail,
  DeleteUserById,
  ToggleDeleteUserPasswordInput,
  HandlePasswordInputChange,
  ToggleAuthenticated
} from '../store/actions/UserActions'
import { useEffect } from 'react'
import Post from '../components/Post'
import PostForm from '../components/PostForm'
import TrailForm from '../components/TrailForm'
import { useNavigate } from 'react-router-dom'

const mapStateToProps = ({ userState }) => {
  return { userState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (userId) => dispatch(GetUserPosts(userId)),
    toggleCreatingPost: (value) => dispatch(ToggleCreatingPost(value)),
    toggleCreatingTrail: (value) => dispatch(ToggleCreatingTrail(value)),
    deleteUser: (userId, passwordBody) =>
      dispatch(DeleteUserById(userId, passwordBody)),
    toggleDeleteUserPasswordInput: () => dispatch(ToggleDeleteUserPasswordInput()),
    handlePasswordInputChange: (password) => dispatch(HandlePasswordInputChange(password)),
    setUser: (user) => dispatch(SetUser(user)),
    toggleAuthenticated: (value) => dispatch(ToggleAuthenticated(value))

  }
}

const UserPage = (props) => {
  let navigate = useNavigate()
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

  const deleteUserProfile = () => {
    props.deleteUser(props.userState.user.id, props.userState.passwordBody)
    props.setUser(null)
    props.toggleAuthenticated(false)
    navigate('/')
  }
  const toggleDeleteUserPasswordInput = () => {
    props.toggleDeleteUserPasswordInput()
  }
  const handlePasswordInputChange = (e) => {
    props.handlePasswordInputChange({password: e.target.value})
  }

  return (
    <div>
      <h1 className='trail-name'>{user.trailName}</h1>
      <button onClick={toggleDeleteUserPasswordInput}>Delete Profile</button>
      {props.userState.deletingUser && 
        <div>
          <input 
            type="password"
            value={props.userState.passwordBody.password}
            placeholder="Enter your password..."
            onChange={handlePasswordInputChange} 
          />
          <button onClick={deleteUserProfile}>Submit</button>
        </div>
      }    
      {creatingPost ? (
        <PostForm />
      ) : (
        <button onClick={addPost}>Add Post</button>
      )}
      {creatingTrail ? (
        <TrailForm />
      ) : (
        <button onClick={addTrail}>Add Trail</button>
      )}

      {posts.length === 0
        ? 'Post something man'
        : posts.map((post) => <Post key={post.id} post={post} />)}
        
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)
