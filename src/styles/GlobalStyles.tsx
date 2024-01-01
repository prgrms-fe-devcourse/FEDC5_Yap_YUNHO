import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
*{
  box-sizing: border-box;
}

html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
a, dl, dt, dd, ol, ul, li, form, label, table{
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}

html{
  width: 100%;
  height: 100%;
  font-size : 62.5%;
}

body{
  width: 100%;
  height: 100%;
  line-height: 1;
  font-family: 'Noto Sans KR', sans-serif;
  background-color: ${({ theme }) => theme.colors.main};
}

#root {
  width: 100%;
  height: 100%;
}


ol, ul{
  list-style: none;
}

button {
  border: 0;
  background: transparent;
  cursor: pointer;
}

input{
  border : none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.white};
}

a{
  text-decoration: none;
  color: inherit;
}
`

export default GlobalStyles