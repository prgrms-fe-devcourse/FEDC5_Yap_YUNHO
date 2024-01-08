import styled from "styled-components"

export const MyMessageLayout = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.semiSmall};
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 1rem;
  border-radius: ${({ theme }) =>
    `0rem ${theme.radius.size12} ${theme.radius.size12}`};
  width: 50%;
  display: flex;
  align-self: flex-end;
`

export const MyMessageContent = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.black};
`
