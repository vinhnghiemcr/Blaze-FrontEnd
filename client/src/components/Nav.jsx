import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
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
      {props.userState.authenticated && props.userState.user ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default connect(mapStateToProps)(Nav)