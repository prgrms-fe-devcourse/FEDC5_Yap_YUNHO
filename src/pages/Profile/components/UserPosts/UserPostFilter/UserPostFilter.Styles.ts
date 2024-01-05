import styled from "styled-components"

export const UserPostFilterLayout = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-47%);

  display: flex;
  gap: 2rem;
`

export const UserPostButton = styled.button<{
  $isSelected?: boolean
  $isMyPage?: boolean
}>`
  padding: 0.8rem 1.2rem;

  font-size: ${({ theme }) => theme.fontSizes.semiLarge};

  border-radius: ${({ theme }) => theme.radius.size8};

  user-select: none;

  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.point_alt : theme.colors.point};

  &:hover {
    background-color: ${({ theme }) => theme.colors.point_alt};
  }
`

export const UserCreatePostsButton = styled(UserPostButton)``

export const UserLikePostsButton = styled(UserPostButton)``
