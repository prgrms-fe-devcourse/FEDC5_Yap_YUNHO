import styled from "styled-components"

export const UserInfoActionsLayout = styled.div`
  width: 22rem;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
`

export const UserInfoButtons = styled.button`
  width: 8rem;
  height: 3rem;

  background-color: ${({ theme }) => theme.colors.point};
  border-radius: ${({ theme }) => theme.radius.size4};
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.5);

  transition: ${({ theme }) => theme.transition.normal};
  &:hover {
    opacity: ${({ theme }) => theme.opacity.normal};
  }
`
