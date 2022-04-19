import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GetPostByTrailId } from '../store/actions/PostActions'
import Post from '../components/Post'
import MapWapper from '../components/MapWrapper'




const mapStateToProps = ({ postState }) => {
  return { postState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (trailId) => dispatch(GetPostByTrailId(trailId))
  }
}

const TrailPage = (props) => {
  let { trailId } = useParams()

  useEffect(() => {
    props.fetchPosts(trailId)
  }, [])

  
  


  return (
    <div>
      {props.postState.posts.map((post) => (
        <Post key={post.id} post={post} />
        ))}
        
        <MapWapper trailId={trailId} />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TrailPage)
