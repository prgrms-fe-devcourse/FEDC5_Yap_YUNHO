import styled from "styled-components"

export const SearchBarForm = styled.form`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 1rem;
  height: 4rem;

  border-radius: 0.8rem;
  border: ${({ theme }) => `0.1rem solid ${theme.colors.sub}`};

  background-color: ${({ theme }) => theme.colors.white};
`

export const SearchBarInput = styled.input`
  width: 100%;
  height: 100%;

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 100rem ${({ theme }) => theme.colors.white} inset !important;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.black} !important;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray40};
  }

  font-size: ${({ theme }) => theme.fontSizes.medium};

  &::-ms-clear,
  &::-ms-reveal {
    cursor: pointer;
  }

  &::-webkit-search-cancel-button {
    cursor: pointer;
  }
`
export const SearchIconLayout = styled.button`
  display: flex;
  align-items: center;
  svg {
    font-size: 2.5rem;
  }
`
