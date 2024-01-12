import styled from "styled-components"

export const SearchResultListLayout = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const SearchResultListTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};

  border-bottom: 0.1rem solid;
  padding-bottom: 0.5rem;
  margin: 1rem 0 0;
`
