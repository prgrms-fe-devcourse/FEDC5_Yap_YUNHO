import styled from "styled-components"

export const LoginInputLayout = styled.div``
export const Input = styled.input`
  padding: 0.8rem 1.2rem;
  display: inline-block;
  width: 100%;

  border: 0.1rem solid gray;
  border-radius: ${({ theme }) => theme.radius.size4};
  &::placeholder {
    font-size: 1rem;
  }
`
