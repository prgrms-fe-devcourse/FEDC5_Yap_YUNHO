import styled from "styled-components"

export const ModalAlertLayout = styled.div`
  width: 40rem;
  height: 20rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ModalAlertMessage = styled.h6`
  width: 32rem;
  height: 14rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme.fontSizes.large};
`
