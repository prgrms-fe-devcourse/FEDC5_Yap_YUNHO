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

  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.4);

  object-fit: cover;
`
