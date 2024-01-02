import styled from "styled-components"

export const UserProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 0 2rem;
  padding: 4rem 0 0;
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

export const UserActionSection = styled.section`
  margin-bottom: 2rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
`

export const UserFollowInfoSection = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 3.5rem;
`

export const UserFollowInfoDividerText = styled.span`
  color: ${({ theme }) => theme.colors.white};
  margin: 0 1rem;
`

export const UserInfoContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  color: ${({ theme }) => theme.colors.white};
`

export const UserInfoButton = styled.button<{ mb?: number }>`
  padding: 0.8rem 1.2rem;
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  letter-spacing: -0.032rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.size8};
  border: 0.1rem solid ${({ theme }) => theme.colors.white};
  margin-bottom: 0.5rem;
  margin-bottom: ${(props) => props.mb ?? 0};
`
