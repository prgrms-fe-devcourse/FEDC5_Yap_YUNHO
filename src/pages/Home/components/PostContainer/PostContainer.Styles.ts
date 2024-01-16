import styled from "styled-components"

export const PostContainerLayout = styled.div`
  width: 100%;
  flex-grow: 1;
  margin-bottom: 20rem;

  display: flex;
  align-items: center;

  position: relative;
  overflow-x: hidden;
`

export const ArrowIcon = styled.button<{ $isLeft: boolean }>`
  position: absolute;
  left: ${({ $isLeft }) => $isLeft && "3rem"};
  right: ${({ $isLeft }) => !$isLeft && "3rem"};
  top: 40%;

  color: ${({ theme }) => theme.colors.point};

  user-select: none;
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndex.homeArrowIcon};

  .arrow_icon {
    font-size: 6rem;
  }
`
