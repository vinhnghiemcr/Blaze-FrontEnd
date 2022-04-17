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
        <h2>Welcome!</h2>
        <Link to='/user'>Profile</Link>
        <Link onClick={props.handleLogOut} to='/'>
          Sign Out
        </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <Link to='/signup'>Register</Link>
      <Link to="/login">Login</Link>
    </nav>
  )

  return (
    <header>
      <Link to='/'>
        <div>
          <h2>
            Home
          </h2>
        </div>
      </Link>
      {props.userState.authenticated && props.userState.user ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default connect(mapStateToProps)(Nav)