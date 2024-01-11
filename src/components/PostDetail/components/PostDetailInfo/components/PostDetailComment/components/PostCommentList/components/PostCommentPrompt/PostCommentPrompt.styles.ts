import styled from "styled-components"

export const CommentPromptLayout = styled.div`
  width: 40rem;
  height: 25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CommentPromptTitle = styled.p`
  width: 40rem;
  height: 7rem;
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme.fontSizes.large};
`

export const CommentPromptErrorContainer = styled.div`
  width: 40rem;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const CommentPromptError = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.point_alt};
`

export const CommentPromptInput = styled.textarea`
  width: 80%;
  height: 7rem;
  padding: 1.4rem;

  border-radius: ${({ theme }) => theme.radius.size8};

  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  line-height: 1.2;

  resize: none;
`

export const CommentPromptActions = styled.div`
  width: 100%;
  height: 7rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`

export const CommentPromptButton = styled.button`
  width: 8rem;
  height: 4rem;

  background-color: ${({ theme }) => theme.colors.point};
  border-radius: ${({ theme }) => theme.radius.size8};

  font-size: ${({ theme }) => theme.fontSizes.large};

  transition: ${({ theme }) => theme.transition.normal};
  &:hover {
    opacity: ${({ theme }) => theme.opacity.normal};
  }
`
