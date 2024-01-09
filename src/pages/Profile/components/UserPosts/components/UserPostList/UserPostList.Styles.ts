import styled from "styled-components"

export const UserPostListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 30rem);
  gap: 6rem;
  justify-content: center;

  padding: 5rem;

  @media (max-width: 750px) {
    grid-template-columns: repeat(1, 30rem);
  }

  @media (min-width: 750px) and (max-width: 1100px) {
    grid-template-columns: repeat(2, 30rem);
  }

  @media (min-width: 1100px) and (max-width: 1400px) {
    grid-template-columns: repeat(3, 30rem);
  }
`

export const UserPostListItemContainer = styled.div`
  width: 30rem;
  aspect-ratio: 1;

  border-radius: ${({ theme }) => theme.radius.size20};
  background-color: ${({ theme }) => theme.colors.sub};
`
