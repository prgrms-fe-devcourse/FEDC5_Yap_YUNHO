import styled from "styled-components"

export const MessageGroupListLayout = styled.div`
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
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.3);
`

export const MessageGroupListInfo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`
export const MessageGroupListSeenTitle = styled.span`
  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fontSizes.large};
`

export const MessageGroupListTotalSeenNumber = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
`

export const MessageGroupListNotSeenTitle = styled.span`
  color: ${({ theme }) => theme.colors.point_alt};
  font-size: ${({ theme }) => theme.fontSizes.large};
  padding-left: 1rem;
`

export const MessageGroupListNotSeenNumber = styled.span`
  color: ${({ theme }) => theme.colors.point_alt};
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
`

export const MessageGroupListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  overflow-y: scroll;
  ${({ theme }) => theme.scrollBarNone};
`

export const MessageItemLayout = styled.button<{ $isSelect: boolean }>`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  &:hover {
    opacity: ${({ theme }) => theme.opacity.normal};
  }
  opacity: ${({ $isSelect }) => ($isSelect ? 0.3 : 1)};
`

export const MessageProfileContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.8rem;
  height: 4.8rem;
`

export const MessageProfileImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: ${({ theme }) => theme.radius.circle};
`

export const SeenIndicator = styled.img`
  position: absolute;
  top: 2.7rem;
  right: 0;
`

export const MessageGroupItemLeftInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
`

export const MessageGroupTextInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
`

export const MessageGroupItemUserName = styled.span`
  color: ${({ theme }) => theme.colors.point};
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
`

export const MessageGroupItemContent = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const MessageGroupItemChatDate = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`

export const MessageGroupItemInfo = styled.div`
  display: flex;
  gap: 1rem;
`

export const MessageGroupItemNotSeenCount = styled.div`
  font-size: 2rem;
  color: orange;
  svg {
    font-size: 2rem;
  }
`
