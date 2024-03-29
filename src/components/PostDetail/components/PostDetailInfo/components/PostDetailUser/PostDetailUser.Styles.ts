import styled, { css } from "styled-components"

export const PostDetailUserLayout = styled.div`
  width: 100%;
  height: 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  user-select: none;
`

export const PostDetailUserContainer = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  gap: 2rem;
`

export const PostDetailUserProfile = styled.div<{ $src: string }>`
  width: 8rem;
  height: 8rem;

  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5);
  border-radius: ${({ theme }) => theme.radius.circle};
  background-color: ${({ theme }) => theme.colors.sub_alt};
  background-image: url(${({ $src }) => $src});
  background-size: cover;

  &:hover {
    cursor: pointer;
  }
`

export const PostDetailUserInfo = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`

const textStyle = css`
  letter-spacing: 0.1rem;
  color: #e9e9e9;
`

export const PostDetailUserName = styled.h6`
  ${textStyle}
  font-size: ${({ theme }) => theme.fontSizes.large};

  &:hover {
    cursor: pointer;
  }
`

export const PostDetailUserFollower = styled.p`
  ${textStyle}
  font-size: ${({ theme }) => theme.fontSizes.medium};
`

export const PostDetailFollowButton = styled.button`
  width: 10rem;
  height: 4rem;

  background-color: ${({ theme }) => theme.colors.point};
  border-radius: ${({ theme }) => theme.radius.size8};
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5);

  font-size: ${({ theme }) => theme.fontSizes.semiLarge};

  transition: opacity ${({ theme }) => theme.transition.normal};
  &:hover {
    opacity: ${({ theme }) => theme.opacity.normal};
  }

  svg {
    pointer-events: none;
  }
`
