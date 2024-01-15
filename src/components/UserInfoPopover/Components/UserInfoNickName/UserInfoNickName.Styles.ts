import styled from "styled-components"

export const UserInfoNickNameLayout = styled.div`
  width: 22rem;
  height: 4rem;

  display: flex;
  align-items: center;
`

export const UserInfoNickNameText = styled.h6`
  width: 22rem;

  display: flex;

  background-color: ${({ theme }) => theme.colors.sub_alt};

  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.white};

  overflow-x: hidden;
  text-overflow: ellipsis;
`
