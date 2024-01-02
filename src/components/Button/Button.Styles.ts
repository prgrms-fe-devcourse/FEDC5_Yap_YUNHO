import styled from "styled-components"

export const ButtonLayout = styled.button<{
  height: string
  color: string
  fontSize: string
  $fontColor: string
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.4rem;
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.$fontColor};
  font-weight: 600;
  &:hover {
    opacity: 0.5;
    p {
      padding-bottom: 0.5rem;
      border-bottom: ${({ theme }) => `5px solid ${theme.colors.point}`};
    }
  }
`
