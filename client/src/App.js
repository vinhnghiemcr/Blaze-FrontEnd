import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './components/Nav'
import Home from './pages/HomePage'
import SignUp from './pages/SignUpPage'
import Login from './pages/LoginPage'
import StatePage from './pages/StatePage'
import TrailPage from './pages/TrailPage'
import UserPage from './pages/UserPage'
import AboutPage from './pages/AboutPage'
import './styles/App.css'
import { CheckSession } from './services/User'
import {
  SetUser,
  ToggleAuthenticated,
  SetUserStateToDefault
} from './store/actions/UserActions'
import TimelinePage from './pages/TimelinePage'

const mapStateToProps = ({ userState }) => {
  return { userState }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(SetUser(user)),
    toggleAuthenticated: (value) => dispatch(ToggleAuthenticated(value)),
    setUserStateToDefault: () => dispatch(SetUserStateToDefault())
  }
}

const App = (props) => {
  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    props.setUser(null)
    props.toggleAuthenticated(false)
    props.setUserStateToDefault()
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    props.setUser(user)
    props.toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Nav handleLogOut={handleLogOut} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/state/:stateId" element={<StatePage />} />
          <Route path="/trail/:trailId" element={<TrailPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          {/* <Route
            path="/feed"
            element={<Feed user={user} authenticated={authenticated} />}
          /> */}
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
