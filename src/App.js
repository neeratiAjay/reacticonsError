import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import DarkModeContext from './context/DarkModeContext'

import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/Protect'

import './App.css'

// Replace your code here
class App extends Component {
  state = {darkMode: false}
  changeTheme = () => {
    this.setState(prev => ({darkMode: !prev.darkMode}))
  }
  render() {
    const {darkMode} = this.state
    return (
      <DarkModeContext.Provider
        value={{darkMode, changeMode: this.changeTheme}}
      >
        <Switch>
        <Route exact path = "/login" component = {Login}/>
        <ProtectedRoute exact path = "/" component = {Home} />
        </Switch>
      </DarkModeContext.Provider>
    )
  }
}

export default App
