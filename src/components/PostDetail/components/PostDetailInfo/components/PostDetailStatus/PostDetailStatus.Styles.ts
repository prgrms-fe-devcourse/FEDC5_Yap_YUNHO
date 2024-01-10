import styled from "styled-components"

export const PostDetailStatus = styled.div`
  width: 100%;
  height: 6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PostDetailStatusActions = styled.div`
  height: 4rem;

  display: flex;
  align-items: center;
`

export const PostDetailLike = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  align-items: center;
  gap: 0.4rem;

  svg {
    font-size: 2.4rem;
  }
`
