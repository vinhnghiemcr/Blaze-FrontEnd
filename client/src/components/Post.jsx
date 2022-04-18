import { connect } from "react-redux"
import { CreateNewComment, UpdateNewCommentContent } from '../store/actions/CommentActions'

const mapStateToProps = ({ commentState, userState }) => {
  return { commentState, userState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewComment: (userId, postId, commentFormValues) => dispatch(CreateNewComment(userId, postId, commentFormValues)),
    updateNewCommentContent: (data) => dispatch(UpdateNewCommentContent(data)),
  }
}

const Post = (props) => {
  const handleChange = (e) => {
    props.updateNewCommentContent({
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.createNewComment(props.userState.user.id, props.post.id, props.commentState.newComment)
  }

  console.log("props.commentState.newComment:", props.commentState.newComment)

  return (
    <div className="post-wrapper">
      <h2>{props.post.title}</h2>
      <img className="postImg" src={props.post.img} alt={props.post.id}/>
      <h4>{props.post.content}</h4>
      <textarea
        name="content"
        placeholder="Add a comment..."
        value={props.commentState.newComment.content}
        onChange={handleChange}
      />
      <button
        disabled={!props.commentState.newComment.content}
        onClick={handleSubmit}
      >
        Add Comment
      </button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)