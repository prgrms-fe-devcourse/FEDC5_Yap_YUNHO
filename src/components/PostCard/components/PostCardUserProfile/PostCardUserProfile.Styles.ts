import styled, { css } from "styled-components"

const postCardUserProfileStyle = css`
  border-radius: ${({ theme }) => theme.radius.circle};
`

export const PostCardUserProfileLayout = styled.div`
  ${postCardUserProfileStyle}
  width: 13%;
  height: 10%;
  margin-left: 5%;

  user-select: none;
`

export const PostCardUserProfileImg = styled.img`
  ${postCardUserProfileStyle}

  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.4);

  object-fit: cover;
`
