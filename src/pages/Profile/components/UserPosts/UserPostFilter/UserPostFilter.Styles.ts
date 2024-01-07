import styled from "styled-components"

export const UserPostFilterLayout = styled.div<{ $isMyPage: boolean }>`
  position: absolute;
  left: 50%;
  transform: ${({ $isMyPage }) =>
    $isMyPage ? `translateX(-47%)` : `translateX(-50%)`};

  display: flex;
  gap: 2rem;
`

export const UserPostFilterButton = styled.button<{
  $isSelected?: boolean
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
