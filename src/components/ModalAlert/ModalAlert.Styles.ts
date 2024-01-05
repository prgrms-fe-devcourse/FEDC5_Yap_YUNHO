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

export const ModalAlertActionContainer = styled.div`
  width: 100%;
  height: 6rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalAlertCloseButton = styled.button`
  width: 8rem;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.point};
  border-radius: ${({ theme }) => theme.radius.size8};

  font-size: ${({ theme }) => theme.fontSizes.semiLarge};

  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.point_alt};
  }
`
