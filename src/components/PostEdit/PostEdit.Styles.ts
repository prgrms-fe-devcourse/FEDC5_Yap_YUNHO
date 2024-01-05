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
    align-items: center;
  }
`

export const PostEditViewerContainer = styled.div`
  width: 46rem;
  height: 70rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const PostEditBoundary = styled.div`
  height: 63rem;
  width: 0.4rem;
  margin: 0 1rem;

  border-radius: ${({ theme }) => theme.radius.size4};
  background-color: ${({ theme }) => theme.colors.point};

  @media (max-width: 1000px) {
    height: 0.4rem;
    width: 42rem;
    margin: 0;
  }
`

export const PostEditEditorContainer = styled.div`
  width: 46rem;
  height: 70rem;

  display: flex;
  align-items: center;
  justify-content: center;
`
