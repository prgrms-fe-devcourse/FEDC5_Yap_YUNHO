import styled, { css } from "styled-components"
const layoutBorder = css`
  border: 3px solid;
  border-color: red;
`
export const SignupInputContainerLayout = styled.div`
  ${layoutBorder}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`
