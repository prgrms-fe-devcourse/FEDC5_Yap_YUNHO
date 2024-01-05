import styled from "styled-components"

export const LoginInputContainerLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 25%;

  margin-bottom: 1.2rem;
`

export const ErrorMessage = styled.div`
  text-align: center;
  display: inline-block;
  min-width: 100%;

  font-size: ${({ theme }) => theme.fontSizes.semiSmall};
  color: red;
`
