import styled from "styled-components"

export const MessageGroupListLayout = styled.div`
  width: 40%;
  height: 100%;
  background: ${({ theme }) => theme.colors.sub_alt};
  border-radius: ${({ theme }) => theme.radius.size20};
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  user-select: none;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.3);
`
