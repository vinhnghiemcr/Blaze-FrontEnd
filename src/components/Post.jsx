import { useEffect, useState } from "react"
import { connect } from "react-redux"
import Comment from './Comment'
import { GetPostComments, CreateComment } from '../services/Comment'
import { FollowingAnUser, UnfollowingAnUser } from '../store/actions/UserActions'

const mapStateToProps = ({ userState }) => {
  return { userState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    followingUser: (userId, followingId) => dispatch(FollowingAnUser(userId, followingId)),
    unfollowingUser: (userId, followingId) => dispatch(UnfollowingAnUser(userId, followingId))
  }
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
    fetchComments() 
    setNewComment('')

  }
  const handleClickViewComment = () => {
    toggleViewComments(!viewComments)
  }

  const isFollowing = () => {
    let userFriendListIDs = props.userState.followingList.map((friend) => friend['followers.id'])
    console.log(userFriendListIDs, "Friendnlist ID")
    if (userFriendListIDs.includes(props.post['User.id'])) {
      return true
    } else {
      return false
    }
  }

  const handleFollowClick = () => {
    props.followingUser(props.userState.user.id, props.post['User.id'])
  }

  const handleUnFollowClick = () => {
    props.unfollowingUser(props.userState.user.id, props.post['User.id'])
  }

  

console.log(props.post, "POST")
  return (
    <div className="post-wrapper">
      <h2>{props.post.title}</h2>
      <div className = 'post-body'>
        <div></div>
        <img className="postImg" src={props.post.img} alt='post image'/>
        <div className="postInfo">          
          <div>
              <h2>By: {props.post['User.trailName']}</h2>
              {(props.userState.user.id !== props.post['User.id']) && ( isFollowing() ? <button onClick={handleUnFollowClick} >Unfollow</button> :<button onClick={handleFollowClick} >Follow</button>)}
                  
          </div>
          <h4>{props.post.content}</h4>
        </div>
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
        <div className = "comment-form-container">
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
      <hr/>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)