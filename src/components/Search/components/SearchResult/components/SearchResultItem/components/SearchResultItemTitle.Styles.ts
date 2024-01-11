import styled from "styled-components"

export const SearchResultItemTitleContainer = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-size: ${({ theme }) => theme.fontSizes.medium};
`
