
import { useNavigate } from 'react-router-dom'
import { LogInUser } from '../services/User'
import { UpdateLoginFormValues, SetUser, ToggleAuthenticated } from '../store/actions/UserActions'
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'

const mapStateToProps = ({ userState }) => {
  return { userState }
}

const mapDispatchToProps = (dispatch) => {
  return {
      updateFormValues: (data) => dispatch(UpdateLoginFormValues(data)),
      setUser: (user) => dispatch(SetUser(user)),
      toggleAuthenticated: (value) => dispatch(ToggleAuthenticated(value))
  }
}

const SignIn = (props) => {
  let navigate = useNavigate()



  

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await LogInUser(props.userState.loginFormValues)
    props.updateFormValues({ email: '', password: '' })
    props.setUser(payload)
    props.toggleAuthenticated(true)
    navigate(`/user`)
  }

  return (
    <div className="signin col">
      <LoginForm handleSubmit={handleSubmit}/>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
