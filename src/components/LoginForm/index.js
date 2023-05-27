// Write your JS code here
import {Component} from 'react'
// import Cookies from 'js-cookie'
// import {Redirect} from 'react-router-dom'

import './index.css'

export default class LoginForm extends Component {
  state = {userName: '', password: '', showSubmitFailed: false, errMsg: ''}

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
    // Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    this.setState({showSubmitFailed: false})
    history.replace('/')
  }

  submitFailed = errorMsg => {
    // console.log(errorMsg)
    this.setState({
      showSubmitFailed: true,
      errMsg: errorMsg,
    })
  }

  submitForm = async event => {
    event.preventDefault()

    const {userName, password} = this.state
    const userDetails = {username: userName, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    console.log(response)
    if (response.ok === true) {
      this.submitSuccess(data.jwt_token)
    } else this.submitFailed(data.error_msg)
  }

  render() {
    const {errMsg, showSubmitFailed} = this.state
    // const jwtToken = Cookies.get('jwt_token')
    // if (jwtToken !== undefined) {
    //   return <Redirect to="/" />
    // }

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
          {showSubmitFailed && <p className="error-msg">*{errMsg}</p>}
        </form>
      </div>
    )
  }
}
