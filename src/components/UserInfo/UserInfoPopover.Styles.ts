import styled from "styled-components"

export const UserInfoBackground = styled.div<{
  $isPostCard?: boolean
}>`
  width: 20rem;
  height: 32rem;
  padding: 1rem;

  user-select: none;
`

export const UserInfoLayout = styled.div`
  width: 18rem;
  height: 20rem;

  background-color: ${({ theme }) => theme.colors.sub_alt};
  border: 1px solid red;
`
