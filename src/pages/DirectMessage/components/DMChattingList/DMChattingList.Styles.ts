import styled from "styled-components"

export const DMChattingListLayout = styled.div`
  width: 60%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.sub_alt};
  border-radius: ${({ theme }) => theme.radius.size20};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`

export const DMChattingListMessageItem = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large};
`
