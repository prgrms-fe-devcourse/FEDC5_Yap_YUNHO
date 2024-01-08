import styled from "styled-components"

export const PostEditEditorLayout = styled.div`
  width: 46rem;
  min-width: 20rem;

  height: 63rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.sub_alt};
  border-radius: ${({ theme }) => theme.radius.size12};
`
