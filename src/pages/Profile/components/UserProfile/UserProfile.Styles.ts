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
export const UserProfileImageContainer = styled.img`
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
