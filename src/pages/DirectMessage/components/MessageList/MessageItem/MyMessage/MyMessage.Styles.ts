import styled from "styled-components"

export const MyMessageLayout = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.semiSmall};
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 1rem;
  border-radius: ${({ theme }) =>
    `0rem ${theme.radius.size12} ${theme.radius.size12}`};
  display: flex;
  align-self: flex-end;
  max-width: 50%;
  position: relative;
`

export const MyMessageContent = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.black};
  white-space: pre-wrap;
`

export const MyMessageReadIndicator = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.point};
  position: absolute;
  left: -1.5rem;
`
