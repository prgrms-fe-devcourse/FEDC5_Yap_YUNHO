import styled from "styled-components"

export const ButtonLayout = styled.button<{
  $color: string
  $fontSize: string
  $fontColor: string
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.4rem;
  background-color: ${({ $color }) => $color};
  font-size: ${({ $fontSize }) => $fontSize};
  border-radius: ${({ theme }) => theme.radius.size20};
  color: ${({ $fontColor }) => $fontColor};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};

  p::after {
    display: block;
    content: "";
    border-bottom: ${({ theme }) => `0.5rem solid ${theme.colors.point}`};
    transform: scaleY(0);
    padding-top: 0.5rem;
  }
  &:hover {
    opacity: 0.5;
    color: ${({ theme }) => theme.colors.gary};
    p::after {
      transform: scaleY(1);
    }
  }
`
