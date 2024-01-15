import styled from "styled-components"

export const UserInfoFollowStatusLayout = styled.div`
  width: 22rem;
  height: 4rem;

  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius.size4};
  background-color: ${({ theme }) => theme.colors.white};
`

export const UserInfoFollowStatus = styled.p`
  width: 11rem;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  white-space: nowrap;
`
