import styled from "styled-components"

export const UserInfoTopLayout = styled.div`
  height: 6rem;
  width: 22rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  border: 1px solid red;
`

export const UserInfoProfile = styled.div<{ $url: string }>`
  width: 5rem;
  height: 5rem;

  border-radius: ${({ theme }) => theme.radius.circle};
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.5);

  background-image: url(${({ $url }) => $url});
  background-size: cover;
  background-position: center;
`

export const UserInfoActions = styled.div`
  width: 16rem;
  height: 6rem;

  border: 1px solid red;
`
