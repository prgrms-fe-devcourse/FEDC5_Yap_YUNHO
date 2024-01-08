import styled from "styled-components"

export const DMChattingListLayout = styled.div`
  width: 60%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.sub_alt};
  border-radius: ${({ theme }) => theme.radius.size20};
  display: flex;
  padding: 3rem;
`

export const DMMessageList = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large};
  overflow-y: scroll;
  height: 90%;
  width: 100%;
  ${({ theme }) => theme.scrollBarNone};
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const DMMessageItem = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large};
`
