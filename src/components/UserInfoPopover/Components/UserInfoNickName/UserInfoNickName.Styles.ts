import styled from "styled-components"

export const UserInfoNickNameLayout = styled.div`
  width: 22rem;
  height: 3rem;

  display: flex;
  align-items: center;
`

export const UserInfoActions = styled.div`
  width: 16rem;
  height: 6rem;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`

export const UserInfoButtons = styled.button`
  width: 7rem;
  height: 3.5rem;

  background-color: ${({ theme }) => theme.colors.point};
  border-radius: ${({ theme }) => theme.radius.size4};
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.5);

  transition: ${({ theme }) => theme.transition.normal};
  &:hover {
    opacity: ${({ theme }) => theme.opacity.normal};
  }
`
