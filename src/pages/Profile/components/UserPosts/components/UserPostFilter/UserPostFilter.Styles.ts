import styled from "styled-components"

export const UserPostFilterLayout = styled.div<{ $isMyPage: boolean }>`
  display: flex;
  justify-content: center;
  gap: 2rem;
`

export const UserPostFilterButton = styled.button<{
  $isSelected?: boolean
}>`
  width: 12rem;
  padding: 0.8rem 1.2rem;

  font-size: ${({ theme }) => theme.fontSizes.semiLarge};

  border-radius: ${({ theme }) => theme.radius.size8};

  user-select: none;

  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.point_alt : theme.colors.point};

  &:hover {
    background-color: ${({ theme }) => theme.colors.point_alt};
    transition: 0.3s ease-in-out;
  }
`
