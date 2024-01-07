import styled, { css } from "styled-components"

const layoutBorder = css`
  border: 3px solid;
  border-color: ${({ theme }) => theme.colors.point};
`

export const SignupLayout = styled.div`
  ${layoutBorder}
  width: 100%;
  height: 100%;
  user-select: none;

  min-height: 50rem;
  display: flex;

  justify-content: center;
  align-items: center;
`
