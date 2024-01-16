import styled from "styled-components"

export const UserEditInputItemLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.3rem;

  height: 10rem;
  width: 26.5rem;

  &:last-of-type {
    position: relative;
    z-index: 0;
    top: -1.5rem;
  }
`

export const UserEditInputItemTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  width: 100%;
`

export const ErrorMessage = styled.div`
  white-space: nowrap;
  height: 1.4rem;
  color: ${({ theme }) => theme.colors.point};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`
