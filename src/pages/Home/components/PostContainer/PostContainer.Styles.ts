import styled, { css } from "styled-components"

export const PostContainerLayout = styled.div`
  width: 100%;
  flex-grow: 1;

  position: relative;
`

const postCardStyled = css`
  position: absolute;

  background-color: ${({ theme }) => theme.colors.sub_alt};
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.8);
`

export const PostMainCard = styled.div`
  ${postCardStyled}
  height: 60rem;
  width: 48rem;
  min-width: 48rem;

  top: calc(40% - 30rem);
  left: calc(50% - 24rem);

  border-radius: ${({ theme }) => theme.radius.size16};

  z-index: 3;
`

export const PostSubCard = styled.div<{ $isLeft: boolean }>`
  ${postCardStyled}
  height: 48rem;
  width: 38.4rem;
  min-width: 38.4rem;

  top: calc(40% - 24rem);
  left: ${({ $isLeft }) => $isLeft && `calc(28% - 19.2rem)`};
  right: ${({ $isLeft }) => !$isLeft && `calc(28% - 19.2rem)`};

  border-radius: ${({ theme }) => theme.radius.size12};

  z-index: 2;
`

export const PostSmallCard = styled.div<{ $isLeft: boolean }>`
  ${postCardStyled}
  height: 36rem;
  width: 28.8rem;
  min-width: 28.8rem;

  top: calc(40% - 18rem);
  left: ${({ $isLeft }) => $isLeft && `calc(11% - 14.4rem)`};
  right: ${({ $isLeft }) => !$isLeft && `calc(11% - 14.4rem)`};

  border-radius: ${({ theme }) => theme.radius.size8};

  z-index: 1;
`

export const ArrowIcon = styled.button<{ $isLeft: boolean }>`
  position: absolute;
  left: ${({ $isLeft }) => $isLeft && "3rem"};
  right: ${({ $isLeft }) => !$isLeft && "3rem"};
  top: calc(40% - 3rem);

  user-select: none;
  cursor: pointer;
  z-index: 4;

  .arrow_icon {
    font-size: 6rem;
  }
`
