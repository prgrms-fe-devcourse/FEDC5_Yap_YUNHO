import styled from "styled-components"

export const SearchResultItemTitleContainer = styled.div`
  display: flex;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-size: ${({ theme }) => theme.fontSizes.medium};
`

export const SearchResultItemText = styled.p`
  white-space: pre;
`

export const SearchResultItemStrongText = styled.strong`
  white-space: pre;
  color: ${({ theme }) => theme.colors.point_alt};
`
