import styled from "styled-components"

export const SearchResultItemContainer = styled.div`
  display: flex;
  align-items: center;

  height: 6em;
  gap: 1rem;

  color: ${({ theme }) => theme.colors.white};

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
  }
`

export const SearchResultItemImage = styled.img`
  width: 5rem;
  object-fit: contain;

  margin-left: 0.5rem;
`
