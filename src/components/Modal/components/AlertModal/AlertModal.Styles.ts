import styled, { css } from "styled-components"

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AlertModalLayout = styled.div`
  width: 40rem;
  height: 20rem;

  ${flexCenter}
  flex-direction: column;

  user-select: none;
`

export const AlertModalMessage = styled.h6`
  width: 32rem;
  height: 14rem;

  ${flexCenter}

  font-size: ${({ theme }) => theme.fontSizes.large};
  word-break: keep-all;
  text-align: center;
  line-height: 1.4;
`
