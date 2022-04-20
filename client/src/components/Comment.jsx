const Comment = ({ comment }) => {
  return (
    <div className="commentMap">
      <h3>{comment['User.trailName']}:</h3>
      <h4>{comment.content}</h4>
    </div>
  )
}

export default Comment