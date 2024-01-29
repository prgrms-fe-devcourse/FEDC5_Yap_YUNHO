import styled from "styled-components"

export const MessageGroupListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  overflow-y: scroll;
  ${({ theme }) => theme.scrollBar};
`
