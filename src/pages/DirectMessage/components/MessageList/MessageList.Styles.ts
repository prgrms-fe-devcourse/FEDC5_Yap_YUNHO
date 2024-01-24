import styled from "styled-components"

export const MessageListLayout = styled.div`
  width: 60%;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.3);
  height: 100%;
  background-color: ${({ theme }) => theme.colors.sub_alt};
  border-radius: ${({ theme }) => theme.radius.size20};
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3rem 1.5rem;
`

export const MessageListContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large};
  overflow-y: scroll;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-right: 1rem;
  ${({ theme }) => theme.scrollBar};
`

export const MessageItem = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large};
`
