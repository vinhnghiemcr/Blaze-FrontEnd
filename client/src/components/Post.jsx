import { useEffect, useState } from "react"
import { connect } from "react-redux"
import Comment from './Comment'
import { GetPostComments, CreateComment } from '../services/Comment'

const mapStateToProps = ({ userState }) => {
  return { userState }
}


const Post = (props) => {
  const [newComment, setNewComment] = useState('')
  const [comments, setComments] = useState([])
  const [viewComments, toggleViewComments] = useState(false)

  const fetchComments = async () => {
    const result = await GetPostComments(props.post.id)
    setComments(result)
  }
  useEffect( () => {
    
      fetchComments()    
  
  }, [])

  const handleChange = (e) => {
     setNewComment(e.target.value)
  }

  const handleSubmit = async () => {
    const comment = await CreateComment(props.userState.user.id, props.post.id, {content: newComment})
    console.log(comment, "COMMENT from Create Comment")
    fetchComments() 
    // setComments([...comments, comment ])
    setNewComment('')
  }
  const handleClickViewComment = () => {
    toggleViewComments(!viewComments)
  }



  console.log(comments, "COMMENTS")
  return (
    <div className="post-wrapper">
      <div>
        <h2>{props.post.title}</h2>
        <img className="postImg" src={props.post.img} alt={props.post.id}/>
        <h4>{props.post.content}</h4>
      </div>
      {viewComments && (
        <div className="comments-wrapper">
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      )}
      <button onClick={handleClickViewComment}>
        {viewComments ? 'Hide Comments' : 'View Comments'}
      </button>
      {props.userState.authenticated && 
        <div>
          <textarea
            name="content"
            placeholder="Add a comment..."
            value={newComment}
            onChange={handleChange}
          />
          <button
            disabled={!newComment}
            onClick={handleSubmit}
          >
            Add Comment
          </button>
        </div>
      }
    </div>
  )
}

export default connect(mapStateToProps)(Post)