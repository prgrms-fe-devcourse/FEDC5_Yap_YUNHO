import styled from "styled-components"

export const UserActionLayout = styled.section`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
`

export const UserActionButton = styled.button<{
  $width?: number
  $isFollowing?: boolean
}>`
  user-select: none;

  width: ${({ $width }) => `${$width}rem` ?? "100%"};
  padding: 0.8rem 1.2rem;

  font-size: ${({ theme }) => theme.fontSizes.semiLarge};

  border-radius: ${({ theme }) => theme.radius.size8};
  background-color: ${({ theme, $isFollowing }) =>
    $isFollowing ? theme.colors.gray : theme.colors.point};

  &:hover {
    opacity: ${({ theme }) => theme.opacity.normal};
    transition: ${({ theme }) => theme.transition.normal};
  }
`
