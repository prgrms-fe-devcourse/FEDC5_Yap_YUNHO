import styled from "styled-components"

export const ButtonLayout = styled.button<{
  $color: string
  $fontSize: string
  $fontColor: string
}>`
  padding: 1rem 1.4rem;
  background-color: ${({ $color }) => $color};
  font-size: ${({ $fontSize }) => $fontSize};
  border-radius: ${({ theme }) => theme.radius.size20};
  color: ${({ $fontColor }) => $fontColor};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};

  &:hover {
    opacity: 0.5;
    color: ${({ theme }) => theme.colors.gary};
  }
`
