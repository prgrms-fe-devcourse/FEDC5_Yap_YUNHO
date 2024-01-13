import styled, { css } from "styled-components"

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalButton = styled.button`
  width: 8rem;
  height: 4rem;

  ${flexCenter}

  background-color: ${({ theme }) => theme.colors.point};
  border-radius: ${({ theme }) => theme.radius.size8};
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.5);

  font-size: ${({ theme }) => theme.fontSizes.large};

  transition: all 0.3s;
  user-select: none;
  &:hover {
    opacity: 0.5;
  }
`

export const ModalBottomActions = styled.div`
  width: 100%;
  height: 6rem;

  ${flexCenter}
  gap: 4rem;
`

export const PostModalGlobalLayout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`

export const PostModalGlobalContainer = styled.div`
  width: 46rem;
  height: 70rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const PostModalGlobalBoundary = styled.div`
  height: 63rem;
  width: 0.4rem;
  margin: 0 1rem;

  border-radius: ${({ theme }) => theme.radius.size4};
  background-color: ${({ theme }) => theme.colors.point};

  @media (max-width: 1000px) {
    height: 0.4rem;
    width: 42rem;
    margin: 0;
  }
`

export const PostModalGlobalViewerLayout = styled.div`
  width: 46rem;
  height: 63rem;

  background-color: ${({ theme }) => theme.colors.sub_alt};
  border-radius: ${({ theme }) => theme.radius.size12};
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5);
`
