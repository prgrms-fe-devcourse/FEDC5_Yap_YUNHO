import styled from "styled-components"

export const UserPostListContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, 30rem);
  gap: 6rem;
  justify-content: center;

  margin-top: 10rem;
  padding: 0 10rem;
`

export const UserPostListItemContainer = styled.div`
  min-width: 30rem;
  aspect-ratio: 1;

  border-radius: ${({ theme }) => theme.radius.size20};
  background-color: ${({ theme }) => theme.colors.sub};
`
