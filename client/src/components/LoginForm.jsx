import { connect } from "react-redux"
import { UpdateLoginFormValues } from '../store/actions/UserActions'



const mapStateToProps = ({ userState }) => {
    return { userState }
  }
  
const mapDispatchToProps = (dispatch) => {
  return {
      updateFormValues: (data) => dispatch(UpdateLoginFormValues(data))
  }
}

const LoginForm = (props) => {

    const handleChange = (e) => {
        props.updateFormValues({[e.target.name]: e.target.value})
    }


    return (
        <div>
          <h2>Login</h2>
          <hr/>
            <div className="card-overlay centered">
        <form className="col" onSubmit={props.handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={props.userState.loginFormValues.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={props.userState.loginFormValues.password}
              required
            />
          </div>
          <button disabled={!props.userState.loginFormValues.email || !props.userState.loginFormValues.password}>
            Sign In
          </button>
        </form>
      </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)