import { connect } from 'react-redux'
import { LoadStates } from '../store/actions/StateActions'
import { useEffect } from 'react'
import Post from '../components/Post'



const mapStateToProps = ({ locationState }) => {
    return { postState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(LoadStates())
    }
}

const HomePage = (props) => { 
    
    useEffect(() => {
        props.fetchPosts()
    }, [])
    
    
    return (
        <div className='home'>
            {props.postState.posts.map((post) => (
                <Post key={post._id} post={post} />
            ))}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)