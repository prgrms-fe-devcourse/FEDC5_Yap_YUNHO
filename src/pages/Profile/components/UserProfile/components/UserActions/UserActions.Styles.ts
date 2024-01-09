import styled from "styled-components"

export const UserActionLayout = styled.section`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
`

export const UserActionButton = styled.button<{
  $width?: number
}>`
  user-select: none;

  width: ${({ $width }) => `${$width}rem` ?? "100%"};
  padding: 0.8rem 1.2rem;

  font-size: ${({ theme }) => theme.fontSizes.semiLarge};

  border-radius: ${({ theme }) => theme.radius.size8};
  background-color: ${({ theme }) => theme.colors.point};
  &:hover {
    background-color: ${({ theme }) => theme.colors.point_alt};
    transition: 0.3s ease-in-out;
  }
`
