import styled from "styled-components"

export const PopoverProvider = styled.div<{
  $isPostCard?: boolean
}>`
  width: ${({ $isPostCard }) => $isPostCard && `13%`};
  height: ${({ $isPostCard }) => $isPostCard && `100%`};
  margin-left: ${({ $isPostCard }) => $isPostCard && "5%"};

  position: relative;

  user-select: none;
`

export const PopoverInnerLayout = styled.div<{
  $top: number
  $left: number
}>`
  position: absolute;
  top: ${({ $top }) => `${$top}px`};
  left: ${({ $left }) => `${$left}px`};
`
