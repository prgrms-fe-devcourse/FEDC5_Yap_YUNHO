import styled from "styled-components"

export const PostDetailUserLayout = styled.div`
  width: 100%;
  height: 10rem;

  display: flex;
  align-items: center;
`

export const PostDetailUserProfile = styled.img`
  width: 8rem;
  height: 8rem;

  /* box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5); */
  border-radius: ${({ theme }) => theme.radius.circle};
  background-color: ${({ theme }) => theme.colors.sub_alt};
`
