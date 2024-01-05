import styled from "styled-components"

export const ModalConfirmLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;

  user-select: none;
`

export const ModalConfirmMessage = styled.h6`
  width: 36rem;
  height: 10rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme.fontSizes.large};
`

export const ModalConfirmActions = styled.div`
  width: 36rem;
  height: 6rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`

export const ModalConfirmButton = styled.button`
  width: 8rem;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.point};
  border-radius: ${({ theme }) => theme.radius.size8};

  font-size: ${({ theme }) => theme.fontSizes.large};

  transition: all 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.point_alt};
  }
`
