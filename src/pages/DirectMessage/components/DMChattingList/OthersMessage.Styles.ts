import styled from "styled-components"

export const OthersMessageLayout = styled.div`
  display: flex;
  gap: 1.2rem;
`

export const OthersMessageItemLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
`

export const OthersMessageInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const OthersMessageUserName = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
`

export const OthersMessageDate = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.semiSmall};
  color: ${({ theme }) => theme.colors.point};
`

export const OthersMessageContentContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.semiSmall};
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 1rem;
  border-radius: ${({ theme }) =>
    `0rem ${theme.radius.size12} ${theme.radius.size12}`};
  width: 100%;
  height: 7rem;
`

export const OthersMessageContent = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.black};
`
