import styled from "styled-components"

export const UserInfoFollowStatusLayout = styled.div`
  width: 22rem;
  height: 4.5rem;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;

  border-radius: ${({ theme }) => theme.radius.size4};
`

export const UserInfoFollowStatus = styled.p`
  width: 11rem;
  height: 2rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  color: ${({ theme }) => theme.colors.white};
  white-space: nowrap;
`
