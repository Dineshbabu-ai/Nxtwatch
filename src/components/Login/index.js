import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import BgContainer from './styledComponents'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isErrorMsg: false,
    showErrorMsg: '',
    showPassword: false,
    theamColor: false,
  }

  handleSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  handleFailure = error => {
    this.setState({showErrorMsg: error, isErrorMsg: true})
  }

  onSubmitCredentials = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.handleSuccess(data.jwt_token)
    } else {
      this.handleFailure(data.error_msg)
    }
  }

  handleUsername = event => {
    this.setState({username: event.target.value})
  }

  handlePassword = event => {
    this.setState({password: event.target.value})
  }

  handleShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  cardNxtwatch = () => {
    const isLogin = Cookies.get('jwt_token')
    if (isLogin !== undefined) {
      return <Redirect to="/" />
    }
    const {showPassword, showErrorMsg, isErrorMsg} = this.state
    const inputType = showPassword ? 'text' : 'password'

    return (
      <div className="login-card">
        <div className="card-align">
          <div className="nxtwatch-logo-containeR">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
              className="nxtwatch-logo"
            />
          </div>

          <form onSubmit={this.onSubmitCredentials}>
            <label htmlFor="username" className="username-label-styling">
              USERNAME
            </label>
            <input
              type="text"
              placeholder="Username"
              id="username"
              className="username-input-styling"
              onChange={this.handleUsername}
            />
            <br /> <br />
            <label htmlFor="password" className="password-label-styling">
              PASSWORD
            </label>
            <input
              type={inputType}
              placeholder="Password"
              id="password"
              className="password-input-styling"
              onChange={this.handlePassword}
            />
            <div className="show-password-container">
              <input
                type="checkbox"
                id="checkbox"
                className="show-password-checkbox-input"
                onClick={this.handleShowPassword}
              />
              <label
                htmlFor="checkbox"
                className="show-password-checkbox-label"
              >
                Show Password
              </label>
            </div>
            {isErrorMsg ? (
              <p className="errorMessage">{showErrorMsg}</p>
            ) : (
              <p className="errorMessage">{showErrorMsg}</p>
            )}
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  render() {
    return (
      <BgContainer className="bg-container">{this.cardNxtwatch()}</BgContainer>
    )
  }
}

export default Login
