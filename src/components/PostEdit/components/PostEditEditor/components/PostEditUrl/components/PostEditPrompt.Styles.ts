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
  height: 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 2.6rem;
  text-align: center;
`

export const PostEditUrlAlertMessage = styled.p`
  width: 30rem;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  color: red;
`

export const PostEditPromptInput = styled.textarea`
  width: 36rem;
  height: 6rem;
  margin-bottom: 3rem;

  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.4);
  border-radius: ${({ theme }) => theme.radius.size8};

  font-size: ${({ theme }) => theme.fontSizes.large};
  text-align: center;

  resize: none;
`
