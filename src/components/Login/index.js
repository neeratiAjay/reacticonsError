import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import DarkModeContext from '../../context/DarkModeContext'

import {
  LoginBgContainer,
  CardContainer,
  LogoImage,
  Form,
  Label,
  Input,
  FlexRowContainer,
  CheckBoxInput,
  ShowLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
    showSubmitError: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, showSubmitError: true})
  }

  submitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  changeUserName = event => {
    this.setState({username: event.target.value})
  }

  changeUserPassword = event => {
    this.setState({password: event.target.value})
  }

  userNameInputContainer = () => {
    return (
      <DarkModeContext.Consumer>
        {value => {
          const {darkMode} = value
          const {username} = this.state
          return (
            <>
              <Label htmlFor="userName" darkMode={darkMode}>
                USERNAME
              </Label>
              <br />
              <Input
                placeholder="Username"
                type="text"
                id="userName"
                darkMode={darkMode}
                value={username}
                onChange={this.changeUserName}
              />
              <br />
            </>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }

  changePasswordType = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  userPasswordContainer = () => (
    <DarkModeContext.Consumer>
      {value => {
        const {darkMode} = value
        const {password, showPassword} = this.state
        const typePassword = showPassword ? 'text' : 'password'

        return (
          <>
            <Label htmlFor="password" darkMode={darkMode}>
              PASSWORD
            </Label>
            <br />
            <Input
              placeholder="Password"
              type={typePassword}
              darkMode={darkMode}
              id="password"
              value={password}
              onChange={this.changeUserPassword}
            />
            <br />
            <FlexRowContainer>
              <CheckBoxInput
                type="checkbox"
                id="showPassword"
                onChange={this.changePasswordType}
              />
              <ShowLabel htmlFor="showPassword" darkMode={darkMode}>
                Show Password
              </ShowLabel>
            </FlexRowContainer>
          </>
        )
      }}
    </DarkModeContext.Consumer>
  )

  render() {
    return (
      <DarkModeContext.Consumer>
        {value => {
          const {darkMode} = value
          const logo = darkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          const {errorMsg, showSubmitError} = this.state
          const jwtToken = Cookies.get('jwt_token')
          if (jwtToken !== undefined) {
            return <Redirect to="/" />
          }

          return (
            <LoginBgContainer darkMode={darkMode}>
              <CardContainer darkMode={darkMode}>
                <LogoImage src={logo} alt="website logo" />
                <Form onSubmit={this.submitForm}>
                  {this.userNameInputContainer()}
                  {this.userPasswordContainer()}
                  <LoginButton type="submit">Login</LoginButton>
                  {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
                </Form>
              </CardContainer>
            </LoginBgContainer>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }
}
export default Login
