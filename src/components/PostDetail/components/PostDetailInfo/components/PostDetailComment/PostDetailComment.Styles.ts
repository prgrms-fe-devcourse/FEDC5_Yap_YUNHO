import styled from "styled-components"

export const PostDetailCommentLayout = styled.div`
  width: 100%;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const PostDetailCommentInfo = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.white};
`
