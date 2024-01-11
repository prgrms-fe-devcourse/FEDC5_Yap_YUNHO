import styled from "styled-components"

export const ModalBackground = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;

  z-index: ${({ theme }) => theme.zIndex.modalBackground};
  background-color: rgba(0, 0, 0, 0.5);

  @media (max-width: 1000px) {
    & {
      align-items: flex-start;
      overflow-y: scroll;
    }
  }
`

export const ModalSection = styled.section`
  width: 104rem;
  height: 80rem;
  padding: 0 2rem 2rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.sub};
  border-radius: ${({ theme }) => theme.radius.size12};
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 1000px) {
    & {
      width: 50rem;
      height: fit-content;

      display: block;
    }
  }
`

export const ModalTop = styled.div`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  svg {
    font-size: 3.2rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.point};

    cursor: pointer;
    transition: all ${({ theme }) => theme.transition.normal};

    &:hover {
      transform: scale(1.4);
    }

    path {
      pointer-events: none;
    }
  }
`

export const ModalContent = styled.div`
  width: 100%;
  flex-grow: 1;
`
