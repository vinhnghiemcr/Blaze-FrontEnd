import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { connect } from "react-redux"
import { CreateNewComment, UpdateNewCommentContent, GetPostComments } from '../store/actions/CommentActions'
import Comment from './Comment'

const mapStateToProps = ({ commentState, userState }) => {
  return { commentState, userState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: (postId) => dispatch(GetPostComments(postId)),
    createNewComment: (userId, postId, commentFormValues) => dispatch(CreateNewComment(userId, postId, commentFormValues)),
    updateNewCommentContent: (data) => dispatch(UpdateNewCommentContent(data)),
  }
}

const Post = (props) => {

  useEffect(() => {
    props.fetchComments(props.post.id)
  }, [])

  const handleChange = (e) => {
    props.updateNewCommentContent({
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.createNewComment(props.userState.user.id, props.post.id, props.commentState.newComment)
  }

  return (
    <div className="post-wrapper">
      <div>
        <h2>{props.post.title}</h2>
        <img className="postImg" src={props.post.img} alt={props.post.id}/>
        <h4>{props.post.content}</h4>
      </div>
      <div className="comments-wrapper">
        {props.commentState.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
      {props.userState.authenticated &&
      <div>
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
      </div>}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)