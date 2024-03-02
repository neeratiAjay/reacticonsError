import styled from 'styled-components'

export const LoginBgContainer = styled.div`
background-color:${props => (props.darkMode ? '#181818' : '#ffffff')};
min-height:100vh;
display:flex;
align-items:center;
justify-content:center;
`
export const CardContainer = styled.div`
background-color:${props => (props.darkMode ? '#0f0f0f' : '#ffffff')};
min-height:300px;
min-width:290px;
border:none;
border-radius:8px;
box-shadow:${props => (props.darkMode ? null : '0px 4px 16px 0px #bfbfbf')};
display:flex;
flex-direction:column;
alignitems:center;

`

export const LogoImage = styled.img`
height:30px;
width:150px;
align-self:center;
margin-top:30px;
margin-bottom:20px;
`

export const Form = styled.form``
export const Label = styled.label`
color:${props => (props.darkMode ? ' #ffffff' : ' #64748b')};
font-weight:bold;
font-size:12px;
padding-left:12px;
font-family:"roboto";
`

export const Input = styled.input`
outline:none;
border:1px solid #94a3b8;
height:30px;
width:280px;
font-family:"roboto";
margin:10px;
background-color: #f1f5f9;
color:${props=>props.darkMode? "#ffffff":"#000000"};
background-color:transparent;
border-radius:4px;
`
export const FlexRowContainer = styled.div`
display:flex;
align-items :center;
`
export const CheckBoxInput = styled.input`
height:15px;
width:15px;
margin-left:20px;
`
export const ShowLabel = styled.label`
color :${props => (props.darkMode ? '#ffffff':'#000000' )};
font-family:"roboto";
font-size:14px;
font-weight:500;
padding-top:0px;
margin-top:0px;
padding-left:5px;
`
export const LoginButton = styled.button`
height:35px;
width:280px;
margin:10px;
background-color: #3b82f6;
color:#ffffff;
text-align:center;
font-weight:bold;
font-size:16px;
outline:none;
cursor:pointer;
border:none;
border-radius:8px;
`
export const ErrorMsg = styled.p`
color: #ff0000;
font-family:"roboto";
font-weight:500;
margin:10px;
margin-bottom:20px;
font-size:12px;
`
