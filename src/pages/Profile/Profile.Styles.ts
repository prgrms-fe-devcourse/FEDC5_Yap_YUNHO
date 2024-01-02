import styled from "styled-components"

export const UserInfoContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  color: ${({ theme }) => theme.colors.white};
`

export const UserInfoButton = styled.button<{ mb?: number }>`
  padding: 0.8rem 1.2rem;
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  letter-spacing: -0.032rem;
  background-color: ${({ theme }) => theme.colors.point};
  border-radius: ${({ theme }) => theme.radius.size8};
  margin-bottom: 0.5rem;
  margin-bottom: 0;
  user-select: none;
  &:hover {
    background-color: ${({ theme }) => theme.colors.point_alt};
  }
`
