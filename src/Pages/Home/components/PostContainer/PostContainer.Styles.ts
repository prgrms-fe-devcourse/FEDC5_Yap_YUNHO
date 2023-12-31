import styled from "styled-components"

export const PostContainerLayout = styled.div`
  width: 100%;
  height: 70%;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid red;
`

export const PostMainItem = styled.div`
  height: 60rem;
  width: 48rem;
  min-width: 48rem;

  position: absolute;
  top: calc(50% - 30rem);
  left: calc(50% - 24rem);

  // 이후 변수 관리
  background-color: blue;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.8);

  opacity: 0.5;
  z-index: 3;
`

export const PostSubItem = styled.div<{ $isLeft: boolean }>`
  height: 48rem;
  width: 38.4rem;
  min-width: 38.4rem;

  position: absolute;
  top: calc(50% - 24rem);
  left: ${({ $isLeft }) => $isLeft && `calc(28% - 19.2rem)`};
  right: ${({ $isLeft }) => !$isLeft && `calc(28% - 19.2rem)`};

  // 이후 변수 관리
  background-color: red;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.8);

  opacity: 0.5;
  z-index: 2;
`

export const PostSmallCard = styled.div<{ $isLeft: boolean }>`
  height: 36rem;
  width: 28.8rem;
  min-width: 28.8rem;

  position: absolute;
  top: calc(50% - 18rem);
  left: ${({ $isLeft }) => $isLeft && `calc(11% - 14.4rem)`};
  right: ${({ $isLeft }) => !$isLeft && `calc(11% - 14.4rem)`};

  // 이후 변수 관리
  background-color: orange;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.8);

  opacity: 0.5;
  z-index: 1;
`

export const ArrowIcon = styled.span<{ $isLeft: boolean }>`
  position: absolute;
  left: ${({ $isLeft }) => $isLeft && "3rem"};
  right: ${({ $isLeft }) => !$isLeft && "3rem"};

  // 이후 변수 관리
  font-size: 6rem;

  user-select: none;
  cursor: pointer;
  z-index: 4;
`
