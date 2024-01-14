import styled from "styled-components"

export const UserInfoPopoverProvider = styled.div<{
  $isPostCard?: boolean
}>`
  width: ${({ $isPostCard }) => $isPostCard && `13%`};
  height: ${({ $isPostCard }) => $isPostCard && `100%`};
  margin-left: ${({ $isPostCard }) => $isPostCard && "5%"};

  position: relative;

  user-select: none;

  border: 1px solid red;
`

export const UserInfoPopoverLayout = styled.div<{
  $top: number
  $left: number
}>`
  width: 20rem;
  height: 14rem;

  position: absolute;
  top: ${({ $top }) => `${$top}px`};
  left: ${({ $left }) => `${$left}px`};

  background-color: ${({ theme }) => theme.colors.sub_alt};
`
