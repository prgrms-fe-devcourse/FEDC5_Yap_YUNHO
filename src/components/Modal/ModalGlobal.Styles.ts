import styled from "styled-components"

export const ModalButton = styled.button`
  width: 8rem;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.point};
  border-radius: ${({ theme }) => theme.radius.size8};

  font-size: ${({ theme }) => theme.fontSizes.large};

  transition: all 0.3s;
  user-select: none;
  &:hover {
    background-color: ${({ theme }) => theme.colors.point_alt};
  }
`

export const ModalBottomActions = styled.div`
  width: 100%;
  height: 6rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`
