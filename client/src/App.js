import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import Nav from './components/Nav'
import './styles/App.css'
import { CheckSession } from './services/Auth'

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
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

export default App
