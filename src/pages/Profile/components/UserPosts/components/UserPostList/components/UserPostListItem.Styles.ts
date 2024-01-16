import styled from "styled-components"

export const UserPostListItemContainer = styled.div<{ $src: string }>`
  width: 30rem;
  height: 30rem;
  position: relative;

  border-radius: ${({ theme }) => theme.radius.size20};
  background-color: ${({ theme }) => theme.colors.sub};
  background-image: url(${({ $src }) => $src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`

export const PostItemHoverContainer = styled.div`
  position: absolute;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  background-color: rgba(0, 0, 0, 0.5);

  width: 30rem;
  aspect-ratio: 1;
`

export const PostItemHoverIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 3rem;
  }
  color: white;
  font-size: 2rem;
`
