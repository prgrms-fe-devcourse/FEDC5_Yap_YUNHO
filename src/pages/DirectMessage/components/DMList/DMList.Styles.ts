import styled from "styled-components"

export const DMListLayout = styled.div`
  width: 40%;
  height: 100%;
  background: gray;
  border-radius: ${({ theme }) => theme.radius.size20};
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  user-select: none;
`

export const DMListNotice = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`
export const DMListNoticeTitle = styled.span`
  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fontSizes.large};
`

export const DMListNoticeContent = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
`

export const DMListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const DMListItemLayout = styled.button`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: "BMJUA", "Noto Sans KR", sans-serif;
`

export const DMListProfile = styled.img`
  border-radius: ${({ theme }) => theme.radius.circle};
`

export const DMListChat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
`

export const DMListChatUserName = styled.span`
  color: ${({ theme }) => theme.colors.point};
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
`

export const DMListChatContent = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  text-align: left;
`

export const DMListChatDate = styled.span`
  color: ${({ theme }) => theme.colors.gray40};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`
