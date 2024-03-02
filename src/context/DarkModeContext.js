import React from 'react'

const DarkModeContext = React.createContext({
  darkMode: false,
  changeMode: () => {},
})
export default DarkModeContext
