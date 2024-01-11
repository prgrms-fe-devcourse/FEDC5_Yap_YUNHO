import styled from "styled-components"

export const PostCommentListLayout = styled.div`
  width: 100%;
  flex-grow: 1;
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-top: 2px solid ${({ theme }) => theme.colors.point};
  border-bottom: 2px solid ${({ theme }) => theme.colors.point};
`
