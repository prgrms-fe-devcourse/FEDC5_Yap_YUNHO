import styled from "styled-components"

export const PostEditUrlLayout = styled.div`
  width: 40rem;
`

export const PostEditUrlTitle = styled.h6`
  width: 100%;
  height: 4rem;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fontSizes.large};

  user-select: none;
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

  opacity: 1;
  cursor: pointer;

  ${({ theme }) => theme.scrollBarNone}
`

export const PostEditPromptLayout = styled.div`
  width: 40rem;
  height: 40rem;

  display: flex;
  flex-direction: column;
`

export const PostEditPromptContainer = styled.div`
  width: 100%;
  height: 30rem;

  background-color: black;
`

export const PostEditPromptActions = styled.div`
  width: 100%;
  height: 10rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  background-color: white;
`

export const PostEditPromptButton = styled.button`
  width: 10rem;
  height: 4rem;

  background-color: orange;
`
