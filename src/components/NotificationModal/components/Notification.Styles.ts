import { styled } from "styled-components"

// 전체 레이아웃
export const NotificationLayout = styled.div`
  transform: translate(-50%, -40%);
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: calc(100% - 10rem);
  max-width: 50rem;
  max-height: 65rem;
  border-radius: ${({ theme }) => theme.radius.size12};
  background-color: ${({ theme }) => theme.colors.sub_alt};
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

// 타이틀
export const NotificationTitleLayout = styled.div`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NotificationTitleContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

export const NotificationTitleList = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
`

export const NotificationTitleListNumber = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.large};
`

export const NotificationDeleteButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.main};
`

// 리스트
export const NotificationListLayout = styled.div`
  width: 100%;
  height: 30rem;
  background-color: ${({ theme }) => theme.colors.sub_alt};
  border-radius: ${({ theme }) => theme.radius.size20};
  display: flex;
  flex-direction: column;
  gap: 3rem;
  ${({ theme }) => theme.scrollBar};
  overflow-y: scroll;

  height: 45rem;
`

// 아이템
export const NotificationItemLayout = styled.button`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
`

export const NotificationItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
`

export const NotificationItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
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
