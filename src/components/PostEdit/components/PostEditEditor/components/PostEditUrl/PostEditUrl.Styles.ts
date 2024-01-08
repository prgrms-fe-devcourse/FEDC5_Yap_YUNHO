import styled from "styled-components"

export const PostEditUrlLayout = styled.div`
  width: 40rem;
`

export const PostEditUrlTitle = styled.div`
  width: 100%;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fontSizes.large};

  user-select: none;

  svg {
    font-size: 2.8rem;

    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }
`

export const PostEitUrlTitleText = styled.h6`
  height: 4rem;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fontSizes.large};
`

export const PostEditUrlInput = styled.textarea`
  width: 100%;
  height: 5rem;
  padding: 1rem;

  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  text-align: center;

  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.4);
  border-radius: ${({ theme }) => theme.radius.size8};

  cursor: pointer;

  ${({ theme }) => theme.scrollBarNone}
  resize: none;
`
