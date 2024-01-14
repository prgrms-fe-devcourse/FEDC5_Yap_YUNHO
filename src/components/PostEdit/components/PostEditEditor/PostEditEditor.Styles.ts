import styled from "styled-components"

export const PostEditEditorLayout = styled.div`
  width: 46rem;
  height: 63rem;
  padding-top: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  background-color: ${({ theme }) => theme.colors.sub_alt};
  border-radius: ${({ theme }) => theme.radius.size12};
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5);
`
