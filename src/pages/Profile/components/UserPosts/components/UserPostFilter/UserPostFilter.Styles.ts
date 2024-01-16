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
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: ${({ theme }) => theme.colors.point_alt};
    transition: ${({ theme }) => theme.transition.normal};
  }
`
