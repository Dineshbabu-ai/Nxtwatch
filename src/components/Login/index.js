import {Component} from 'react'
<<<<<<< HEAD
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import BgContainer from './styledComponents'
=======
>>>>>>> ddf958fd0a6a746d25c2015fa72763a65137f457

import './index.css'

class Login extends Component {
<<<<<<< HEAD
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
=======
  state = {username: '', password: '', showErrorMsg: ''}

  handleSuccess = jwtToken => {
>>>>>>> ddf958fd0a6a746d25c2015fa72763a65137f457
    const {history} = this.props
    history.replace('/')
  }

  handleFailure = error => {
<<<<<<< HEAD
    this.setState({showErrorMsg: error, isErrorMsg: true})
=======
    console.log(error)
>>>>>>> ddf958fd0a6a746d25c2015fa72763a65137f457
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

<<<<<<< HEAD
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

=======
  cardNxtwatch = () => {
    console.log('idneh')
>>>>>>> ddf958fd0a6a746d25c2015fa72763a65137f457
    return (
      <div className="login-card">
        <div className="card-align">
          <div className="nxtwatch-logo-containeR">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
<<<<<<< HEAD
              alt="website logo"
=======
              alt=""
>>>>>>> ddf958fd0a6a746d25c2015fa72763a65137f457
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
<<<<<<< HEAD
              type={inputType}
=======
              type="password"
>>>>>>> ddf958fd0a6a746d25c2015fa72763a65137f457
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
<<<<<<< HEAD
                onClick={this.handleShowPassword}
=======
>>>>>>> ddf958fd0a6a746d25c2015fa72763a65137f457
              />
              <label
                htmlFor="checkbox"
                className="show-password-checkbox-label"
              >
                Show Password
              </label>
            </div>
<<<<<<< HEAD
            {isErrorMsg ? (
              <p className="errorMessage">{showErrorMsg}</p>
            ) : (
              <p className="errorMessage">{showErrorMsg}</p>
            )}
=======
>>>>>>> ddf958fd0a6a746d25c2015fa72763a65137f457
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  render() {
<<<<<<< HEAD
    return (
      <BgContainer className="bg-container">{this.cardNxtwatch()}</BgContainer>
    )
=======
    return <div className="bg-container">{this.cardNxtwatch()}</div>
>>>>>>> ddf958fd0a6a746d25c2015fa72763a65137f457
  }
}

export default Login
