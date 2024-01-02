import styled from "styled-components"

export const UserInfoContainer = styled.div<{ mb?: number }>`
  padding: 0.8rem 1.2rem;
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.size8};
  border: 0.1rem solid ${({ theme }) => theme.colors.white};
  margin-bottom: 0.5rem;
  color: 
  margin-bottom: ${(props) => props.mb ?? 0};
  display: flex;
  align-items: center;
`
