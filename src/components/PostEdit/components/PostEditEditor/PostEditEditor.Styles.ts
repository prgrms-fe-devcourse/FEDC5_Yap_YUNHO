import styled from "styled-components"

export const PostEditEditorLayout = styled.div`
  width: 46rem;
  height: 63rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.sub_alt};
  border-radius: ${({ theme }) => theme.radius.size12};
`
