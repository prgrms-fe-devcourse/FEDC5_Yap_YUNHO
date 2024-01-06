import styled, { css } from "styled-components"

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalButton = styled.button`
  width: 8rem;
  height: 4rem;

  ${flexCenter}

  background-color: ${({ theme }) => theme.colors.point};
  border-radius: ${({ theme }) => theme.radius.size8};

  font-size: ${({ theme }) => theme.fontSizes.large};

  transition: all 0.3s;
  user-select: none;
  &:hover {
    background-color: ${({ theme }) => theme.colors.point_alt};
  }
`

export const ModalBottomActions = styled.div`
  width: 100%;
  height: 6rem;

  ${flexCenter}
  gap: 4rem;
`
