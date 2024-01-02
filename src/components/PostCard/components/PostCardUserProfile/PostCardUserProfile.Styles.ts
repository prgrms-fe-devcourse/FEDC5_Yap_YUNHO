import styled, { css } from "styled-components"

const postCardUserProfileStyle = css`
  border-radius: ${({ theme }) => theme.radius.circle};
`

export const PostCardUserProfileLayout = styled.div`
  ${postCardUserProfileStyle}
  height: 10%;
  margin-left: 5%;

  user-select: none;
`

export const PostCardUserProfileImg = styled.img`
  ${postCardUserProfileStyle}
  height: 100%;
  object-fit: cover;

  border-radius: ${({ theme }) => theme.radius.circle};
`
