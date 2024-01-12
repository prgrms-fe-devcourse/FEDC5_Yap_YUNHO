import styled from "styled-components"

export const DMChattingListLayout = styled.div`
  width: 60%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.sub_alt};
  border-radius: ${({ theme }) => theme.radius.size20};
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3rem 1.5rem;
`

export const DMMessageList = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large};
  overflow-y: auto;
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-right: 1rem;
  ${({ theme }) => theme.scrollBar};
`

export const DMMessageItem = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large};
`
