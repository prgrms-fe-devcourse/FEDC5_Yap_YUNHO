import styled from "styled-components"

export const DMListLayout = styled.div`
  width: 40%;
  height: 100%;
  background: ${({ theme }) => theme.colors.sub_alt};
  border-radius: ${({ theme }) => theme.radius.size20};
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  user-select: none;
`

export const DMListInfo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`
export const DMListTotalNoticeTitle = styled.span`
  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fontSizes.large};
`

export const DMListTotalNoticeNumber = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
`

export const DMListNotNoticeTitle = styled.span`
  color: ${({ theme }) => theme.colors.point_alt};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`

export const DMListNotNoticedNumber = styled.span`
  color: ${({ theme }) => theme.colors.point_alt};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`

export const DMListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  overflow-y: scroll;
  ${({ theme }) => theme.scrollBarNone};
`

export const DMListItemLayout = styled.button<{ $isSelect: boolean }>`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  align-items: flex-start;
  &:hover {
    opacity: 0.5;
  }
  opacity: ${({ $isSelect }) => ($isSelect ? 0.3 : 1)};
`

export const DMUserProfileContainer = styled.div`
  position: relative;
  width: 4.8rem;
  height: 4.8rem;
`

export const DMUserProfileImg = styled.img`
  border-radius: ${({ theme }) => theme.radius.circle};
`

export const SeenIndicator = styled.img`
  position: absolute;
  top: 2.7rem;
  right: 0;
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
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const DMListChatDate = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`
