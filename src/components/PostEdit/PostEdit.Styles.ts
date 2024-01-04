import styled from "styled-components"

export const PostEditLayout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  border: 1px solid red;
`

export const PostEditViewerContainer = styled.div`
  width: 46rem;
  height: 70rem;

  background-color: #fff;
`

export const PostEditEditorContainer = styled.div`
  width: 46rem;
  height: 70rem;

  background-color: orange;
`
