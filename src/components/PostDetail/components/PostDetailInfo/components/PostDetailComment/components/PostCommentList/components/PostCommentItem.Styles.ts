import styled from "styled-components"

export const PostCommentItemLayout = styled.div`
  width: 100%;
  min-height: 6rem;

  border: 1px solid red;
`

export const PostCommentItemUserProfile = styled.div<{ $profile: string }>`
  width: 6rem;
  height: 6rem;

  border-radius: ${({ theme }) => theme.radius.circle};
  background-image: url(${({ $profile }) => $profile});
  background-color: ${({ theme }) => theme.colors.sub_alt};
  background-size: cover;
`
