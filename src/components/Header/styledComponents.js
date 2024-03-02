import styled from 'styled-components'

export const HeaderContainer = styled.div`
background-color:${props=>props.darkMode? "#231f20" : "#ffffff"};
height:15vh;
display:flex;
justify-content:space-between;
align-items:center;
`
export const LogoImg = styled.img`
height:30px;
width:120px;
`
export const Ul = styled.ul`
width:100%;
list-style:none;
`
export const Li = styled.li``

export const CustomButton = styled.button`
background-color:transparent;
outline:none;
cursor:pointer;
border:none;
`
