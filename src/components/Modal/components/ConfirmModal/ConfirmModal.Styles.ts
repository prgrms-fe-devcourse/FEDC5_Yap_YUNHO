import styled from "styled-components"

export const ConfirmModalLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;

  user-select: none;
`

export const ConfirmModalMessage = styled.h6`
  width: 36rem;
  height: 10rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme.fontSizes.large};
`
