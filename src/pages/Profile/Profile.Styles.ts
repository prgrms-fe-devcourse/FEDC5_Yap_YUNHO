import styled from "styled-components"

export const UserProfileLayout = styled.div`
  width: 100%;
  height: calc(100% - 10rem);

  overflow-y: scroll;
  ${({ theme }) => theme.scrollBarNone}

  display: flex;
  flex-direction: column;
`

export const UserInfoButton = styled.button``
