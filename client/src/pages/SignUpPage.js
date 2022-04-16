import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import SignUpForm from '../components/SignUpForm'
import { UpdateSignUpFormValues, SetUser, ToggleAuthenticated } from '../store/actions/UserActions'


const mapStateToProps = ({ userState }) => {
    return { userState }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
        updateFormValues: (data) => dispatch(UpdateSignUpFormValues(data)),
        setUser: (user) => dispatch(SetUser(user)),
        toggleAuthenticated: (value) => dispatch(ToggleAuthenticated(value))
    }
}


const Register = (props) => {

  let navigate = useNavigate()
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser(props.userState.signupFormValues)
    props.userState.updateFormValues({
        name: '',
        trailName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    navigate('/login')
  }

  return (
    <div className="signin col">
        <SignUpForm handleSubmit={handleSubmit}/>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
