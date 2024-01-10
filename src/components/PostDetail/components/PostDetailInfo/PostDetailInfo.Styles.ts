import styled from "styled-components"

export const PostDetailInfoLayout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`

export const PostDetailInfoBoundary = styled.div`
  height: 0.4rem;
  width: 100%;
  margin: 1.3rem 0;

  border-radius: ${({ theme }) => theme.radius.size4};
  background-color: ${({ theme }) => theme.colors.point};
`
