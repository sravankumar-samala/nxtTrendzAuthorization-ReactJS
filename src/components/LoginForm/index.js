// Write your JS code here
import {Component} from 'react'
import './index.css'

export default class LoginForm extends Component {
  state = {userName: '', password: '', errMsg: ''}

  renderUserNameField = () => {
    const {userName} = this.state
    return (
      <>
        <label htmlFor="username" className="username-label">
          USERNAME
        </label>
        <input
          type="text"
          className="username-input"
          id="username"
          value={userName}
          placeholder="Username"
          onChange={event =>
            this.setState({userName: event.target.value, errMsg: ''})
          }
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label htmlFor="password" className="password-label">
          PASSWORD
        </label>
        <input
          type="password"
          className="password-input"
          id="password"
          value={password}
          placeholder="Password"
          onChange={event =>
            this.setState({password: event.target.value, errMsg: ''})
          }
        />
      </>
    )
  }

  submitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()

    const {userName, password} = this.state
    const userDetails = {userName, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    console.log(data)
    // if (response.ok) {
    //   this.submitSuccess()
    // } else {
    //   const errorMessage = response.error
    //   this.setState({errMsg: errorMessage})
    // }
  }

  render() {
    const {errMsg} = this.state
    return (
      <div className="login-form-page">
        <div className="form-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="home-logo-image"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="home-png"
          />
        </div>
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="form-logo-image"
          />
          <div className="input-container">{this.renderUserNameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-btn">
            Login
          </button>
          <p className="error-msg">{errMsg}</p>
        </form>
      </div>
    )
  }
}
