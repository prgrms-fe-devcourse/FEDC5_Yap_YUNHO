import styled from "styled-components"

export const PostContainerLayout = styled.div`
  width: 100%;
  flex-grow: 1;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PostMainCard = styled.div`
  height: 60rem;
  width: 48rem;
  min-width: 48rem;

  position: absolute;
  top: calc(40% - 30rem);
  left: calc(50% - 24rem);

  background-color: ${({ theme }) => theme.colors.sub_alt};
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.8);

  z-index: 3;
`

export const PostSubCard = styled.div<{ $isLeft: boolean }>`
  height: 48rem;
  width: 38.4rem;
  min-width: 38.4rem;

  position: absolute;
  top: calc(40% - 24rem);
  left: ${({ $isLeft }) => $isLeft && `calc(28% - 19.2rem)`};
  right: ${({ $isLeft }) => !$isLeft && `calc(28% - 19.2rem)`};

  background-color: ${({ theme }) => theme.colors.sub_alt};
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.8);

  z-index: 2;
`

export const PostSmallCard = styled.div<{ $isLeft: boolean }>`
  height: 36rem;
  width: 28.8rem;
  min-width: 28.8rem;

  position: absolute;
  top: calc(40% - 18rem);
  left: ${({ $isLeft }) => $isLeft && `calc(11% - 14.4rem)`};
  right: ${({ $isLeft }) => !$isLeft && `calc(11% - 14.4rem)`};

  background-color: ${({ theme }) => theme.colors.sub_alt};
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.8);

  z-index: 1;
`

export const ArrowIcon = styled.span<{ $isLeft: boolean }>`
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
