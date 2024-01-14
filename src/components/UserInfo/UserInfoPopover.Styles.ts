import styled from "styled-components"

export const UserInfoBackground = styled.div<{
  $isPostCard?: boolean
}>`
  width: 26rem;
  height: 18rem;
  padding: 1rem;

  user-select: none;
`

export const UserInfoLayout = styled.div`
  width: 24rem;
  height: 16rem;

  background-color: ${({ theme }) => theme.colors.sub_alt};
  border: 1px solid red;
`
