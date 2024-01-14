import styled from "styled-components"

export const ErrorMessage = styled.div`
  text-align: center;
  display: inline-block;
  min-width: 100%;

  font-size: ${({ theme }) => theme.fontSizes.semiSmall};
  color: ${({ theme }) => theme.colors.point};
`
