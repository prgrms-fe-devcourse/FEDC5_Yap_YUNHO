import styled from "styled-components"

export const PostDetailStatus = styled.div`
  width: 100%;
  height: 6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  user-select: none;
`

export const PostDetailStatusActions = styled.div`
  height: 4rem;

  display: flex;
  align-items: center;

  gap: 3rem;

  svg {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.colors.white};

    cursor: pointer;
  }
`

export const PostDetailLike = styled.button<{ $isMyLikePost: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  align-items: center;
  gap: 0.4rem;

  svg {
    margin-right: 1rem;

    font-size: 2.4rem;

    transition: transform ${({ theme }) => theme.transition.normal};
    color: ${({ theme, $isMyLikePost }) =>
      $isMyLikePost ? theme.colors.point : theme.colors.white};

    &:hover {
      transform: rotate(-15deg) scale(1.3) translate(-0.4rem, -0.4rem);
    }
  }
`
