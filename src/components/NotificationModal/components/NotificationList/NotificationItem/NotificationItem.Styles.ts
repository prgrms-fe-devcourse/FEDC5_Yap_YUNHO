import styled from "styled-components"

export const NotificationItemLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  &:hover {
    opacity: 0.5;
  }

  cursor: pointer;
`

export const NotificationItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
`

export const NotificationItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
`

export const NotificationItemUserName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.point};
`

export const NotificationItemContent = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.medium};
`

export const NotificationItemDate = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.gray};
`
