import { connect } from "react-redux"
import { CreateNewPost, UpdateNewPostValue } from '../store/actions/PostActions'
import { ToggleCreatingPost, GetUserPosts} from '../store/actions/UserActions'
import { useEffect, useState } from "react"
import { GetAllTrailNames } from "../services/Trail"
import Dropdown from "./Dropdown"



const mapStateToProps = ({ userState, postState }) => {
  return { userState, postState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (userId, data) => dispatch(CreateNewPost(userId,data)),
    updateNewPostValue: (data) => dispatch(UpdateNewPostValue(data)),
    toggleCreatingPost: (value) => dispatch(ToggleCreatingPost(value)),
    fetchPosts: (userId) => dispatch(GetUserPosts(userId))
  }
}

const PostForm = (props) => {
const [trailNames, settrailNames] = useState([])
let userId = props.userState.user.id

const getAllTrailNames = async () => {
  const nameOfAllTrails =  await GetAllTrailNames()
  settrailNames(nameOfAllTrails)
}
useEffect(() => {
  getAllTrailNames()
}, [])
  const handleChange = (e) => {
    props.updateNewPostValue({[e.target.name]: e.target.value})
  }

  const handlePostSubmission = (e) => {
    e.preventDefault()
    props.createPost(userId, props.postState.newPost)
    props.fetchPosts(userId)
    props.toggleCreatingPost(false)
  }

  const handleChangeForTrailName = (e) => {
    props.updateNewPostValue({trailName: e.target.value})
  }
  const closePostForm = () => {
    props.toggleCreatingPost(false)
  }
 
  return (
    <div className="post-form">
      <button onClick={closePostForm} className='close-modal'>X</button>
      <form className="form-wrapper" onSubmit={handlePostSubmission}>
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
          <label>Image</label>
          <input
            onChange={handleChange}
            name="img"
            type="text"
            placeholder="Enter image path..."
            value={props.postState.newPost.img}
          />
        </div>
        <div className="input-wrapper">
          <label>Trail Name</label>
          <input
            onChange={handleChangeForTrailName}
            name="trailName"
            type="text"
            placeholder="Enter trail name..."
            value={props.postState.newPost.trailName}
            required
          />
          <Dropdown setName={handleChangeForTrailName} list={trailNames} />
        </div>
        <button disabled={!props.postState.newPost.title || !props.postState.newPost.content || !props.postState.newPost.trailName}>
           Submit Post
        </button>
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)