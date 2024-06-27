import {Component} from 'react'

import './index.css'

class Login extends Component {
  state = {username: '', password: '', showErrorMsg: ''}

  handleSuccess = jwtToken => {
    const {history} = this.props
    history.replace('/')
  }

  handleFailure = error => {
    console.log(error)
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

  cardNxtwatch = () => {
    console.log('idneh')
    return (
      <div className="login-card">
        <div className="card-align">
          <div className="nxtwatch-logo-containeR">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt=""
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
              type="password"
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
              />
              <label
                htmlFor="checkbox"
                className="show-password-checkbox-label"
              >
                Show Password
              </label>
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  render() {
    return <div className="bg-container">{this.cardNxtwatch()}</div>
  }
}

export default Login
