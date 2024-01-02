import styled from "styled-components"

export const LoginInputLayout = styled.div`
  margin-top: 1rem;
`
export const Input = styled.input`
  padding: 0.5rem;
  box-sizing: border-box;
  display: inline-block;
  width: 100%;
  min-height: 100%;
  border: 0.1rem solid gray;
  border-radius: ${({ theme }) => theme.radius.size4};
  &::placeholder {
    font-size: 1rem;
  }
`
