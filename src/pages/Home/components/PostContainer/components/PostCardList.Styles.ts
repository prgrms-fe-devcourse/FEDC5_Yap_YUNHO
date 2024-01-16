import styled, { css } from "styled-components"

const postCardStyled = css`
  position: absolute;

  background-color: ${({ theme }) => theme.colors.sub_alt};
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.8);
`

export const PostMainCard = styled.div`
  ${postCardStyled}
  height: 60rem;
  width: 48rem;

  left: calc(50% - 24rem);

  border-radius: ${({ theme }) => theme.radius.size16};

  z-index: ${({ theme }) => theme.zIndex.postMainCard};

  @media (max-height: 1100px) {
    align-self: flex-start;
  }
`

export const PostSubCard = styled.div<{ $isLeft: boolean }>`
  ${postCardStyled}
  height: 48rem;
  width: 38.4rem;

  left: ${({ $isLeft }) => $isLeft && `calc(28% - 19.2rem)`};
  right: ${({ $isLeft }) => !$isLeft && `calc(28% - 19.2rem)`};

  border-radius: ${({ theme }) => theme.radius.size12};

  z-index: ${({ theme }) => theme.zIndex.postSubCard};
  cursor: pointer;

  @media (max-height: 950px) {
    align-self: flex-start;
  }
`

export const PostSmallCard = styled.div<{ $isLeft: boolean }>`
  ${postCardStyled}
  height: 36rem;
  width: 28.8rem;

  left: ${({ $isLeft }) => $isLeft && `calc(11% - 14.4rem)`};
  right: ${({ $isLeft }) => !$isLeft && `calc(11% - 14.4rem)`};

  border-radius: ${({ theme }) => theme.radius.size8};

  z-index: ${({ theme }) => theme.zIndex.postSmallCard};
  cursor: pointer;

  @media (max-height: 800px) {
    align-self: flex-start;
  }
`
