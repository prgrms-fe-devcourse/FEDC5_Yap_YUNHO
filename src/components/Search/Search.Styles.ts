import styled from "styled-components"

export const SearchLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 5%;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.sub_alt};
  border-radius: ${({ theme }) => theme.radius.size12};
`
