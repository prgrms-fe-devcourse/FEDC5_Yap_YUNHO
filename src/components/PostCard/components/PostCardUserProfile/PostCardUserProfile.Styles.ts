import styled, { css } from "styled-components"

const postCardUserProfileStyle = css`
  width: 6rem;
  height: 6rem;
  border-radius: ${({ theme }) => theme.radius.circle};
`

export const PostCardUserProfileLayout = styled.div`
  ${postCardUserProfileStyle}
  margin-bottom: 1rem;
`

export const PostCardUserProfileImg = styled.img`
  ${postCardUserProfileStyle}
`
