import styled from "styled-components"

export const UserInfoBackground = styled.div<{
  $isPostCard?: boolean
}>`
  width: 26rem;
  height: 20rem;
  padding: 1rem;

  user-select: none;
`

export const UserInfoLayout = styled.div`
  width: 24rem;
  height: 18rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: ${({ theme }) => theme.colors.sub_alt};
  border-radius: ${({ theme }) => theme.radius.size8};
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.5);
`
