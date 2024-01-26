import styled from "styled-components"

export const MessageGroupItemLayout = styled.button<{ $isSelect: boolean }>`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  &:hover {
    opacity: ${({ theme }) => theme.opacity.normal};
  }
  opacity: ${({ $isSelect }) => ($isSelect ? 0.3 : 1)};
`

export const MessageGroupItemLeftInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
`

export const MessageGroupItemTextInfo = styled.div`
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
