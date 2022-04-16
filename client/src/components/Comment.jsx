const Comment = ({comment}) => {

  return (
      <div className="commentMap">
          <h2>{comment.Trailname}</h2>
          <h4>{comment.content}</h4>
      </div>
  )
}

export default Post