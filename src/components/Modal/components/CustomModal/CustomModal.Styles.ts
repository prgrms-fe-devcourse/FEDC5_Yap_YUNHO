import styled from "styled-components"

export const CustomModalBackground = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;

  z-index: ${({ theme }) => theme.zIndex.customModalBackground};
  background-color: rgba(0, 0, 0, 0.5);
`

export const CustomModalSection = styled.section<{
  $width: number
  $height: number
}>`
  width: ${({ $width }) => `${$width + 4}rem`};
  height: ${({ $height }) => `${$height + 4}rem`};
  padding: 2rem;

  background-color: ${({ theme }) => theme.colors.sub};
  border-radius: ${({ theme }) => theme.radius.size12};
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
`

export const CustomModalContent = styled.div<{
  $width: number
  $height: number
}>`
  width: ${({ $width }) => `${$width}rem`};
  height: ${({ $height }) => `${$height}rem`};
  ${({ theme }) => theme.scrollBar};

  background-color: ${({ theme }) => theme.colors.sub_alt};
  border-radius: ${({ theme }) => theme.radius.size12};
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.2);
`
