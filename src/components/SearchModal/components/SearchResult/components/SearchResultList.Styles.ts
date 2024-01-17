import styled from "styled-components"

export const SearchResultListLayout = styled.div<{ $isSelected: boolean }>`
  width: ${({ $isSelected }) => ($isSelected ? "100%" : "50%")};
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const SearchResultListTitle = styled.div`
  color: ${({ theme }) => theme.colors.black};

  font-size: ${({ theme }) => theme.fontSizes.medium};

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.point_alt};
  padding-bottom: 0.5rem;
  margin: 1rem 0 0;

  font-size: 2.3rem;
`
