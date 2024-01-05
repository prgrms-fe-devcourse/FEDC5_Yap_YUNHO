import styled from "styled-components"

export const PostEditPromptLayout = styled.div`
  width: 40rem;
  height: 30rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PostEditPromptTitle = styled.h6`
  width: 30rem;
  height: 14rem;

  display: flex;
  align-items: center;

  font-size: 2.6rem;
  text-align: center;
`

export const PostEditPromptInput = styled.textarea`
  width: 36rem;
  height: 6rem;

  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.4);
  border-radius: ${({ theme }) => theme.radius.size8};

  font-size: ${({ theme }) => theme.fontSizes.large};
  text-align: center;

  resize: none;
`

export const PostEditPromptActions = styled.div`
  width: 100%;
  height: 10rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`

export const PostEditPromptButton = styled.button`
  width: 10rem;
  height: 4rem;

  background-color: ${({ theme }) => theme.colors.point};
  border-radius: ${({ theme }) => theme.radius.size8};

  font-size: ${({ theme }) => theme.fontSizes.large};

  transition: all 0.3s;
  user-select: none;
  &:hover {
    background-color: ${({ theme }) => theme.colors.point_alt};
  }
`
