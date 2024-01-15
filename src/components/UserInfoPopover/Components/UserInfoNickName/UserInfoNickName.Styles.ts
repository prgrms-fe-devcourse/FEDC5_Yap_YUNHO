import styled from "styled-components"

export const UserInfoNickNameLayout = styled.div`
  width: 22rem;
  height: 4rem;

  display: flex;
  align-items: center;

  border: 1px solid red;
`

export const UserInfoNickNameText = styled.h6`
  width: 22rem;

  font-size: ${({ theme }) => theme.fontSizes.large};

  overflow-x: hidden;
  text-overflow: ellipsis;
`
