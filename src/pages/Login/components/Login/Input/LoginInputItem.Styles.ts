import styled from "styled-components"

export const LoginInputItemLayout = styled.div``
export const Input = styled.input`
  padding: 0.8rem 1.2rem;
  display: inline-block;
  width: 100%;

  border-radius: ${({ theme }) => theme.radius.size4};
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5);
  &::placeholder {
    font-size: 1rem;
  }
`
