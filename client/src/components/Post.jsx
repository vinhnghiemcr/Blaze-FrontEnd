const Post = ({post}) => {

  return (
      <div className="postMap">
          <h2>{post.title}</h2>
          <img className="postImg" src={post.img} alt={post.id}/>
          <h4>{post.content}</h4>
      </div>
  )
}

export default Post