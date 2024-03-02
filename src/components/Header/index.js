import React from "react"
import {Link} from 'react-router-dom'
import { CiLight } from "react-icons/ci"
import { MdNightlightRound } from "react-icons/md"

import DarkModeContext from '../../context/DarkModeContext'
import {
  HeaderContainer,
  LogoImg,
  Ul,
  Li,
  CustomButton,
} from './styledComponents'

const Header = () => {
  return (
    <DarkModeContext.Consumer>
      {value => {
       
        const {darkMode, changeMode} = value
        const logo = darkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        const onChangeTheme = () => {
          changeMode()
        }
        return (
          <HeaderContainer darkMode={darkMode}>
            <LogoImg src={logo} alt="website logo" />
            <Ul>
              <Li>
                <CustomButton
                  type="button"
                  onClick={onChangeTheme}
                >
               {darkMode? <CiLight/>:<MdNightlightRound/>}
                </CustomButton>
              </Li>
            </Ul>
          </HeaderContainer>
        )
      }}
    </DarkModeContext.Consumer>
  )
}
export default Header
