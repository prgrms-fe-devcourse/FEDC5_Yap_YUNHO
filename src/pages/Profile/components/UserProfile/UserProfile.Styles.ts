import styled from "styled-components"

export const UserProfileLayout = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 4rem 0;
  padding: 4rem 0;
  border-bottom: 0.1rem solid;
`
export const UserProfileImageContainer = styled.div`
  height: 16rem;
  width: 16rem;
  border-radius: ${({ theme }) => theme.radius.circle};
  background-color: ${({ theme }) => theme.colors.sub};
  overflow: hidden;
  margin-bottom: 2rem;
`

export const UserNickNameContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.white};
`

export const UserFollowInfoLayout = styled.section`
  position: absolute;
  left: 50%;
  bottom: 0rem;
  transform: translateX(-50%);

  margin-bottom: 3rem;

  display: flex;
  gap: 1rem;
`

export const UserFollowInfoContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  color: ${({ theme }) => theme.colors.white};
`

export const UserFollowingInfoContainer = styled(UserFollowInfoContainer)``

export const UserFollowerInfoContainer = styled(UserFollowInfoContainer)``

export const UserFollowInfoDividerText = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: "Noto Sans KR", sans-serif;
  transform: translateY(10%);
`
