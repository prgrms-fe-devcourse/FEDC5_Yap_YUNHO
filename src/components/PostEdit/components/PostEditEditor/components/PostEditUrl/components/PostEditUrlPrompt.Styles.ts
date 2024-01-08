import styled, { css } from "styled-components"

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PostEditUrlPromptLayout = styled.div`
  width: 40rem;
  height: 30rem;

  ${flexCenter}
  flex-direction: column;
`

export const PostEditUrlPromptTitle = styled.h6`
  width: 30rem;
  height: 10rem;

  ${flexCenter}
  flex-direction: column;

  font-size: 2.6rem;
  text-align: center;

  user-select: none;
`

export const PostEditUrlErrorMessage = styled.p`
  width: 30rem;
  height: 4rem;

  ${flexCenter}

  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  color: red;

  user-select: none;
`

export const PostEditUrlPromptInput = styled.textarea`
  width: 36rem;
  height: 6rem;
  margin-bottom: 3rem;

  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.4);
  border-radius: ${({ theme }) => theme.radius.size8};

  font-size: ${({ theme }) => theme.fontSizes.large};
  text-align: center;

  resize: none;
`
