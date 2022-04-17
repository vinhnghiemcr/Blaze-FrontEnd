import { connect } from "react-redux"
import { UpdatePostFormValues } from '../store/actions/UserActions'
import { CreateNewPost, UpdateNewPostValue } from '../store/actions/PostActions'

const mapStateToProps = ({ userState, postState }) => {
  return { userState, postState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (data) => dispatch(CreateNewPost(data)),
    updateNewPostValue: (data) => dispatch(UpdateNewPostValue(data))
  }
}

const PostForm = (props) => {
  let userId = props.userState.user.id
  const handleChange = (e) => {
    props.updateNewPostValue({[e.target.name]: e.target.value})
  }

  const handlePostSubmission = (e) => {
    e.preventDefault()
    props.createPost(userId, props.postState.newPost)
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