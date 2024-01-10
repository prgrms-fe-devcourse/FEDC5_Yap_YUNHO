import styled from "styled-components"

export const PostCommentListLayout = styled.div`
  width: 100%;
  flex-grow: 1;

  border-top: 2px solid ${({ theme }) => theme.colors.point};
  border-bottom: 2px solid ${({ theme }) => theme.colors.point};
`
