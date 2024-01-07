import styled from "styled-components"

export const PostEditInputLayout = styled.div`
  width: 40rem;
  height: 14rem;
`

export const PostEditInputTitle = styled.h6`
  width: 100%;
  height: 4rem;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fontSizes.large};
`

export const PostEditInput = styled.textarea`
  width: 100%;
  height: 10rem;
  padding: 1rem;

  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  text-align: center;

  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.4);
  border-radius: ${({ theme }) => theme.radius.size8};

  ${({ theme }) => theme.scrollBarNone}

  resize: none;
`
