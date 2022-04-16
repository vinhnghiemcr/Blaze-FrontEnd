import { connect } from 'react-redux'
import { LoadStates } from '../store/actions/StateActions'
import { useEffect } from 'react'



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
            
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)