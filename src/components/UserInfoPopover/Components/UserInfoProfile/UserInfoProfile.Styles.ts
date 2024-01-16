import styled from "styled-components"

export const UserInfoProfileLayout = styled.div`
  height: 6rem;
  width: 22rem;

  display: flex;
  align-items: center;
  gap: 1rem;
`

export const UserInfoProfile = styled.div<{ $url: string }>`
  width: 5rem;
  height: 5rem;

  border-radius: ${({ theme }) => theme.radius.circle};
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.5);

  background-image: url(${({ $url }) => $url});
  background-size: cover;
  background-position: center;

  cursor: pointer;

  transition: ${({ theme }) => theme.transition.normal};
  &:hover {
    opacity: ${({ theme }) => theme.opacity.normal};
  }
`

export const UserInfoNickNameText = styled.h6`
  width: 16rem;

  display: flex;

  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.white};

  overflow-x: hidden;
  text-overflow: ellipsis;
`
