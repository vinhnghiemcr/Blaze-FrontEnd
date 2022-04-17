import { connect } from 'react-redux'
import { GetUserPosts } from '../store/actions/UserActions'
import { useEffect } from 'react'
import Post from '../components/Post'
import PostForm from '../components/PostForm'

const mapStateToProps = ({ userState }) => {
  return { userState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (userId) => dispatch(GetUserPosts(userId))
  }
}

const UserPage = (props) => {
  const { user, authenticated, posts } = props.userState
  useEffect(() => {
    props.fetchPosts(props.userState.user.id)
  }, [])

  console.log('userState: ', props.userState)
  return (
    <div>
      <h1>{user.trailName}</h1>
      <PostForm />
      {posts.length === 0
        ? 'Post something man'
        : posts.map((post) => {
            ;<Post key={post.id} {...post} />
          })}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)
