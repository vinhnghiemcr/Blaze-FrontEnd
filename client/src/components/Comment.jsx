const Comment = ({ comment }) => {
  // console.log(comment.User.trailName, "Trail name")
  return (
    <div className="commentMap">
      <h2>{comment['User.trailName']}</h2>
      <h4>{comment.content}</h4>
    </div>
  )
}

export default Comment