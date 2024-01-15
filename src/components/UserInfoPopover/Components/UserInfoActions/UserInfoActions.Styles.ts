import styled, { css } from "styled-components"

export const UserInfoTopLayout = styled.div`
  height: 6rem;
  width: 22rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  border: 1px solid red;
`

const hoverEffect = css`
  transition: ${({ theme }) => theme.transition.normal};
  &:hover {
    opacity: ${({ theme }) => theme.opacity.normal};
  }
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

  ${hoverEffect}
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

  ${hoverEffect}
`
