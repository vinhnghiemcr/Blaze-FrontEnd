import { connect } from "react-redux"
import { CreateNewPost, UpdateNewPostValue } from '../store/actions/PostActions'
import { ToggleCreatingPost } from '../store/actions/UserActions'
import { useNavigate } from "react-router-dom"

const mapStateToProps = ({ userState, postState }) => {
  return { userState, postState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (userId, data) => dispatch(CreateNewPost(userId,data)),
    updateNewPostValue: (data) => dispatch(UpdateNewPostValue(data)),
    toggleCreatingPost: (value) => dispatch(ToggleCreatingPost(value))
  }
}

const PostForm = (props) => {
let navigate = useNavigate()

  let userId = props.userState.user.id
  const handleChange = (e) => {
    props.updateNewPostValue({[e.target.name]: e.target.value})
  }

  const handlePostSubmission = (e) => {
    e.preventDefault()
    props.createPost(userId, props.postState.newPost)
    props.toggleCreatingPost(false)
    
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={handlePostSubmission}>
        <div className="input-wrapper">
          <label>Title</label>
          <input
            onChange={handleChange}
            name="title"
            type="text"
            placeholder="Enter post title..."
            value={props.postState.newPost.title}
            required
           />
        </div>
        <div className="input-wrapper">
          <label>Content</label>
          <textarea
            onChange={handleChange}
            name="content"
            type="text"
            placeholder="Enter post content..."
            value={props.postState.newPost.content}
            required
          />
        </div>
        <div className="input-wrapper">
          <label>Trail Name</label>
          <input
            onChange={handleChange}
            name="trailName"
            type="text"
            placeholder="Enter trail name..."
            value={props.postState.newPost.trailName}
            required
           />
        </div>
        <div className="input-wrapper">
          <label>Image</label>
          <input
            onChange={handleChange}
            name="img"
            type="text"
            placeholder="Enter image path..."
            value={props.postState.newPost.img}
          />
        </div>
        <button disabled={!props.postState.newPost.title || !props.postState.newPost.content || !props.postState.newPost.trailName}>
           Submit Post
        </button>
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)