import styled from "styled-components"

export const LoginInputItemLayout = styled.div`
  width: 53%;
`
export const Input = styled.input`
  width: 100%;
  height: 4rem;
  padding: 0.8rem 1.2rem;
  display: inline-block;

  border-radius: ${({ theme }) => theme.radius.size4};
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5);
  &::placeholder {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`
export const ErrorMessage = styled.div`
  text-align: center;
  display: inline-block;
  min-width: 100%;

  font-size: ${({ theme }) => theme.fontSizes.semiSmall};
  color: red;
`
