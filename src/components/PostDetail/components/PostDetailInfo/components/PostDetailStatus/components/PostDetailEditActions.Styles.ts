import styled from "styled-components"

export const PostDetailEditActions = styled.div`
  height: 6rem;

  display: flex;

  gap: 1rem;
`

export const PostDetailEditButton = styled.button`
  height: 6rem;
  width: 6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${({ theme }) => theme.radius.circle};
  background-color: ${({ theme }) => theme.colors.point};
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5);

  font-size: ${({ theme }) => theme.fontSizes.semiLarge};

  transition: opacity ${({ theme }) => theme.transition.normal};

  &:hover {
    opacity: ${({ theme }) => theme.opacity.normal};
  }
`
