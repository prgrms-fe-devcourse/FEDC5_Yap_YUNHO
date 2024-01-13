import styled from "styled-components"

export const UserInfoPopoverProvider = styled.div<{
  $isPostCard?: boolean
}>`
  width: ${({ $isPostCard }) => $isPostCard && `13%`};
  height: ${({ $isPostCard }) => $isPostCard && `10%`};
  margin-left: ${({ $isPostCard }) => $isPostCard && "5%"};

  position: relative;

  user-select: none;
`

export const UserInfoPopoverLayout = styled.div`
  width: 20rem;
  height: 14rem;

  position: absolute;
  top: 100%;
  left: calc(50% - 2rem);
`

export const UserInfoPopoverInteriorArrow = styled.div`
  height: 1.8rem;
  width: 1.8rem;

  position: absolute;
  top: 0.4rem;
  left: 1rem;

  background-color: ${({ theme }) => theme.colors.sub_alt};
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5);

  transform: rotate(45deg);
`

export const UserInfoPopoverContainer = styled.div`
  height: 12rem;
  width: 20rem;
  padding: 1rem;

  position: absolute;
  top: 0.9rem;

  background-color: ${({ theme }) => theme.colors.sub_alt};
  border-radius: ${({ theme }) => theme.radius.size8};
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5);
`
