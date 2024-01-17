import styled from "styled-components"

export const SearchResultItemTitleContainer = styled.div`
  display: flex;

  font-size: ${({ theme }) => theme.fontSizes.semiLarge};

  overflow: hidden;
  text-overflow: ellipsis;

  padding-bottom: 0.5rem;
`

export const SearchResultItemEllipsisText = styled.p``

export const SearchResultItemStrongText = styled.strong`
  white-space: pre;
  color: ${({ theme }) => theme.colors.point_alt};

  text-overflow: ellipsis;
`
export const SearchResultItemText = styled.p`
  white-space: pre;

  overflow: hidden;
  text-overflow: ellipsis;
`
