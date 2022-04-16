import { Link } from 'react-router-dom'

const Nav = ({ authenticated, user, handleLogOut}) => {
  let authenticatedOptions
  if(user) {
    authenticatedOptions = (
      <nav>
        <h2>Welcome!</h2>
        <Link to='/user'>Profile</Link>
        <Link onClick={handleLogOut} to='/state'>
          Sign Out
        </Link>
      </nav>
    )
  }
}

export default Nav