import styled from "styled-components"

export const SearchResultLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  border-radius: ${({ theme }) => theme.radius.size4};
  margin-top: 1rem;
  padding: 1rem;

  gap: 3rem;
`

export const SearchNoResultConatiner = styled.div`
  width: 100%;
  height: 100%;

  font-size: 1.5rem;

  color: ${({ theme }) => theme.colors.white};
`
