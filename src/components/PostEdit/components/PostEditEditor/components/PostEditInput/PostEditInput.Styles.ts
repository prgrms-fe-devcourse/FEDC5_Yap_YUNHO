import styled from "styled-components"

export const PostEditInputLayout = styled.div`
  width: 40rem;
  height: 14rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PostEditInputTitle = styled.h6`
  width: 82%;
  height: 4rem;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fontSizes.large};
`

export const PostEditInput = styled.textarea`
  width: 82%;
  height: 12rem;
  padding: 1.6rem;

  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.4);
  border-radius: ${({ theme }) => theme.radius.size8};

  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  line-height: 1.4;
  letter-spacing: 0.4px;

  ${({ theme }) => theme.scrollBarNone}

  resize: none;
`
