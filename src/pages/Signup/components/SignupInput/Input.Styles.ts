import styled from "styled-components"

export const InputLayout = styled.div`
  width: 53%;
`

export const Input = styled.input`
  width: 100%;
  height: 4rem;
  padding: 0.8rem 1.2rem;
  display: inline-block;
  color: ${({ theme }) => theme.colors.black};

  border-radius: ${({ theme }) => theme.radius.size4};
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5);

  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  &::placeholder {
    font-family: "BMJUA", "Noto Sans KR", sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }

  &[type="password"] {
    font-family: sans-serif;
  }
`
