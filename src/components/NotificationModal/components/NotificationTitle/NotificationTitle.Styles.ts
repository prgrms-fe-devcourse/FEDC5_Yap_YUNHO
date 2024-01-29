import styled from "styled-components"

export const NotificationTitleLayout = styled.div`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
`

export const NotificationTitleContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

export const NotificationTitleList = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  user-select: none;
`

export const NotificationTitleListNumber = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.large};
`

export const NotificationDeleteButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.main};
`
