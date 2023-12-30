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

  background-color: orange;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.8);

  opacity: 0.5;
  z-index: 1;
`
