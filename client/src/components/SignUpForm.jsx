import { connect } from "react-redux"
import { UpdateSignUpFormValues } from '../store/actions/UserActions'


const mapStateToProps = ({ userState }) => {
    return { userState }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
        updateFormValues: (data) => dispatch(UpdateSignUpFormValues(data))
    }
}

const SignUpForm = (props) => {

    const handleChange = (e) => {
        props.updateFormValues({[e.target.name]: e.target.value})
    }


    return (
        <div>
            <form className="col" onSubmit={props.handleSubmit}>
                <h2>Register</h2>
                <hr/>
                <div className="input-wrapper">
                    <label htmlFor="name">Name</label>
                    <input
                    onChange={handleChange}
                    name="name"
                    type="text"
                    placeholder="Your name here..."
                    value={props.userState.signupFormValues.name}
                    required
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="name">Trail Name</label>
                    <input
                    onChange={handleChange}
                    name="trailName"
                    type="text"
                    placeholder="Trail Nickname"
                    value={props.userState.signupFormValues.trailName}
                    required
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <input
                    onChange={handleChange}
                    name="email"
                    type="email"
                    placeholder="example@example.com"
                    value={props.userState.signupFormValues.email}
                    required
                    />
                </div>

                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input
                    onChange={handleChange}
                    type="password"
                    name="password"
                    placeholder="password"
                    value={props.userState.signupFormValues.password}
                    required
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                    onChange={handleChange}
                    type="password"
                    name="confirmPassword"
                    placeholder="password x2"
                    value={props.userState.signupFormValues.confirmPassword}
                    required
                    />
                </div>
                <button
                    disabled={
                    !props.userState.signupFormValues.email ||
                    (!props.userState.signupFormValues.password &&
                        props.userState.signupFormValues.confirmPassword === props.userState.signupFormValues.password)
                }>
                    Sign In
                </button>
        </form>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
