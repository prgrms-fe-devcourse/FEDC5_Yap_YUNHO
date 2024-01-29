import styled from "styled-components"

export const NotificationListLayout = styled.div`
  width: 100%;
  height: 30rem;
  background-color: ${({ theme }) => theme.colors.sub_alt};
  border-radius: ${({ theme }) => theme.radius.size20};
  display: flex;
  flex-direction: column;
  gap: 3rem;
  ${({ theme }) => theme.scrollBar};
  overflow-y: scroll;

  height: 45rem;
`
