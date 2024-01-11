import styled from "styled-components"

export const ButtonLayout = styled.button<{
  $color: string
  $fontSize: string
  $fontColor: string
}>`
  padding: 1rem 1.4rem;
  border-radius: ${({ theme }) => theme.radius.size20};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  background-color: ${({ $color }) => $color};
  font-size: ${({ $fontSize }) => $fontSize};
  color: ${({ $fontColor }) => $fontColor};

  &:hover {
    opacity: ${({ theme }) => theme.opacity.normal};
    color: ${({ theme }) => theme.colors.gary};
  }
`
