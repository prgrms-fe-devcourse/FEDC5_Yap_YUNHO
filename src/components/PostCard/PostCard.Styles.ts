import styled from "styled-components"

export const PostCardLayout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const PostCardPlayerLayout = styled.div`
  width: 90%;
  height: 20%;
  margin-top: 3%;
  margin-left: 5%;

  background-color: ${({ theme }) => theme.colors.point};
`
