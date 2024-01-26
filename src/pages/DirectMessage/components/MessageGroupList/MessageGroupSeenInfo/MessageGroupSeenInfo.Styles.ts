import styled from "styled-components"

export const MessageGroupSeenInfoLayout = styled.div`
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
