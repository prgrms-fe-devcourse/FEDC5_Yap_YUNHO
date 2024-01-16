import styled from "styled-components"

export const InputLayout = styled.div`
  width: 26.5rem;
  position: relative;
`

export const VisibleButton = styled.button`
  position: absolute;

  min-height: 1.5rem;
  aspect-ratio: 1;

  right: 0.8rem;
  top: 1.25rem;
`

export const InputField = styled.input`
  width: 100%;
  height: 4rem;
  padding: 0.8rem 1.2rem;
  display: inline-block;
  color: ${({ theme }) => theme.colors.black};

  border-radius: ${({ theme }) => theme.radius.size4};
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5);

  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  &::placeholder {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }

  &[type="password"] {
    font-family: sans-serif;
  }

  &:focus {
    transition: all 0.1s ease-in-out;
    outline: 0.4rem solid ${({ theme }) => theme.colors.point};
  }
  &:disabled {
    cursor: not-allowed;
    opacity: ${({ theme }) => theme.opacity.normal};
  }
`
