import styled, { css } from "styled-components"
const layoutBorder = css`
  border: 3px solid;
  border-color: royalblue;
`

export const SingupInputItem = styled.div`
  ${layoutBorder}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  height: 33%;
  width: 100%;
`
