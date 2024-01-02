import styled from "styled-components"

export const UserProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 0 2rem;
  padding: 4rem 0 0;
  border-bottom: 1px solid;
`
export const UserProfileImageContainer = styled.div`
  height: 16rem;
  width: 16rem;
  border-radius: 50%;
  background-color: gray; //TODO: 컬러 변수로 등록하기?
  overflow: hidden;
  margin-bottom: 2rem;
`

export const UserActionSection = styled.section`
  margin-bottom: 2rem;
`

export const UserFollowInfoSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 5rem;
`
