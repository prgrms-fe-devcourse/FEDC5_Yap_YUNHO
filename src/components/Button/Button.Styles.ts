import styled from "styled-components"

export const ButtonLayout = styled.button<{
  $height: string
  $fontSize: string
  $fontColor: string
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.4rem;
  height: ${(props) => props.$height};
  background-color: ${(props) => props.color};
  font-size: ${(props) => props.$fontSize};
  color: ${(props) => props.$fontColor};
  border-radius: 1rem;
  font-weight: 600;
  &:hover {
    background-color: #e9ecef;
  }
`
