import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import AboutPage from '../pages/AboutPage'
import '../styles/App.css'

const mapStateToProps = ({ userState }) => {
  return { userState }
}

const Nav = (props) => {
  let authenticatedOptions
  if(props.userState.user) {
    authenticatedOptions = (
      <nav>
        <Link to="/about">About</Link>
        <Link to='/timeline'>Timeline</Link>
        <Link to='/user'>Profile</Link>
        <Link onClick={props.handleLogOut} to='/'>
          Sign Out
        </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <Link to="/about">About</Link>
      <Link to='/signup'>Register</Link>
      <Link to="/login">Login</Link>
    </nav>
  )

  return (
    <header>
      <Link to='/'>
        <div>
          <img className ="navLogo" src="https://i.imgur.com/rggyD1j.png" alt="logo"/> 
        </div>
      </Link>
      <div className='tree'>
        <img className ="treeOne" src="https://i.imgur.com/t85I3wt.png" alt="treeOne"/>
        <img className ="treeTwo" src="https://i.imgur.com/2qmPB9z.png" alt="treeTwo"/>
        <img className ="treeThree" src="https://i.imgur.com/9AAkXsQ.png" alt="treeThree"/>
      </div>
      {props.userState.authenticated && props.userState.user ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default connect(mapStateToProps)(Nav)