import React from 'react';
// import './sign-in.styles';

class SignIn extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          email: '',
          password: ''
        }
      }

      handleChange = (event) => {
           const { value, name } = event.target;
           // [name] is dynamically setting the state for email and password. If handleChange is taking info from email, then [name] will have the value of email. If handleChange is taking info from password, then [name] will have the value of password.
           // essentially [name] will represent event.target.name, but it's dynamic property accessor with [name]
           this.setState({[name]: value})
      }

      handleSubmit = (event) => {
        event.preventDefault();
        // setting email and password back to an empty string clearing the input fields
        this.setState({email: '', password: ''})
      }

      render() {
        return (
          <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
              <input onChange={this.handleChange} name="email" type="email" value={this.state.email} required/>
              <label>Email</label>

              <input onChange={this.handleChange} name="password" type="password" value={this.state.password} required/>
              <label>Password</label>

              <input type="submit" value="Submit Form"/>
            </form>

          </div>
          )
      }
}
export default SignIn;
