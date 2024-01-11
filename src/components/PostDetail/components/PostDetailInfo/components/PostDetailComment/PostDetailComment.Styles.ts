import styled from "styled-components"

export const PostDetailCommentLayout = styled.div`
  width: 100%;
  height: 40rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const PostDetailCommentInfo = styled.p`
  height: 2rem;
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.white};
`
