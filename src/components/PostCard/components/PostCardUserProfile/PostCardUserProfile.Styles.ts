import styled from "styled-components"

export const PostCardUserProfileLayout = styled.div`
  width: 100%;
  height: 10%;

  position: relative;

  user-select: none;
`

export const PostCardUserProfileImgLayout = styled.div`
  width: 100%;
  height: 100%;

  border-radius: ${({ theme }) => theme.radius.circle};
`

export const PostCardUserProfileImg = styled.img`
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.4);
  border-radius: ${({ theme }) => theme.radius.circle};

  object-fit: cover;
`

export const PostCardShowMoreButton = styled.button`
  margin-right: 5%;

  position: absolute;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  color: ${({ theme }) => theme.colors.point};

  transition: opacity ${({ theme }) => theme.transition.normal};

  svg {
    margin-left: 0.6rem;

    font-size: 3rem;

    pointer-events: none;
  }

  &:hover {
    opacity: ${({ theme }) => theme.opacity.normal};
  }
`
