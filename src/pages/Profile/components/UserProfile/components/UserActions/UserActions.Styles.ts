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
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5);

  &:hover {
    opacity: ${({ theme }) => theme.opacity.normal};
    transition: ${({ theme }) => theme.transition.normal};
  }
`
