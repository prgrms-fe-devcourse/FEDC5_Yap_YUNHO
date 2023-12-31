import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
a{
  text-decoration: none;
  color: inherit;
}
*{
  box-sizing: border-box;
}
html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
a, dl, dt, dd, ol, ul, li, form, label, table,button{
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 10px;
  vertical-align: baseline;
}
body{
  line-height: 1;
  font-family: 'Noto Sans KR', sans-serif;
    background-color: #F6F9F0;
  margin-bottom: 100px;
}
ol, ul{
  list-style: none;
}
button {
  background: transparent;
    font-family: 'Noto Sans KR', sans-serif;
  cursor: pointer;
}
html{
  font-size : 62.5%;
}
input{
  border : none;
  outline: none;
  background-color: #e9e9e9;
    font-family: 'Noto Sans KR', sans-serif;
}

`

export default GlobalStyles
