import { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import Nav from './components/Nav'
import './styles/App.css'
import { CheckSession } from './services/User'
import { SetUser, ToggleAuthenticated } from './store/actions/UserActions'

const mapStateToProps = ({ userState }) => {
  return { userState }
}
const mapDispatchToProps = (dispatch) => {
  return {
      setUser: (user) => dispatch(SetUser(user)),
      toggleAuthenticated: (value) => dispatch(ToggleAuthenticated(value))
  }
}

const App = (props) => {
  
  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    props.setUser(null)
    props.toggleAuthenticated(false)
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
      <Nav
        authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn setUser={setUser} toggleAuthenticated={toggleAuthenticated} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/feed" element={<Feed user={user} authenticated={authenticated} />} />
        </Routes>
      </main>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
