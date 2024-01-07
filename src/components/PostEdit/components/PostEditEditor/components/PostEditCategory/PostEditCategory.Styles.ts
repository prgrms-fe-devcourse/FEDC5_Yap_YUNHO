import styled from "styled-components"

export const PostEditCategoryLayout = styled.div`
  width: 40rem;
`

export const PostEditCategoryTitle = styled.h6`
  width: 82%;
  height: 4rem;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fontSizes.large};
`
