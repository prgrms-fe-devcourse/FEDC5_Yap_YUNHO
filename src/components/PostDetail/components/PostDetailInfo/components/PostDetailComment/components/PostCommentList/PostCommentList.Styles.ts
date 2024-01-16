import styled from "styled-components"

export const PostCommentListLayout = styled.ul`
  width: 100%;
  height: 35rem;
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-top: 2px solid ${({ theme }) => theme.colors.point};
  border-bottom: 2px solid ${({ theme }) => theme.colors.point};

  ${({ theme }) => theme.scrollBarNone}
  overflow-y: scroll;
`
