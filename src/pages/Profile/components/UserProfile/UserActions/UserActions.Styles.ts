import styled from "styled-components"

export const UserActionLayout = styled.section`
  width: 100%;
  height: 4rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
`

export const UserActionButton = styled.button<{ isSelected?: boolean }>`
  position: absolute;
  padding: 0.8rem 1.2rem;
  margin: 0 1rem;
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.point_alt : theme.colors.point};
  border-radius: ${({ theme }) => theme.radius.size8};
  user-select: none;
  &:hover {
    background-color: ${({ theme }) => theme.colors.point_alt};
  }
`
export const UserFolloActionwButton = styled(UserActionButton)`
  right: 50%;
`

export const UserSendDMActionButton = styled(UserActionButton)`
  left: 50%;
`

export const UserUpdateMyInfoButton = styled(UserActionButton)``
