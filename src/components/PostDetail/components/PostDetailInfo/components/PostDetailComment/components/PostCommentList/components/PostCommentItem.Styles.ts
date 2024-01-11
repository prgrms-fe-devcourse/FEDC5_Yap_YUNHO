import styled from "styled-components"

export const PostCommentItemLayout = styled.li`
  width: 100%;

  height: fit-content;

  display: flex;
  gap: 1rem;
`

export const PostCommentItemUserProfile = styled.div<{ $profile: string }>`
  width: 6rem;
  height: 6rem;

  border-radius: ${({ theme }) => theme.radius.circle};
  background-image: url(${({ $profile }) => $profile});
  background-color: ${({ theme }) => theme.colors.sub_alt};
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5);
  background-size: cover;
`

export const PostCommentItemContainer = styled.div`
  width: 74%;
  height: fit-content;

  display: flex;
  flex-direction: column;
`

export const PostCommentItemInfo = styled.p`
  width: 100%;
  height: 3rem;

  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  align-items: center;

  user-select: none;
  svg {
    font-size: 2rem;
    margin: 0 0.2rem 0 1rem;
  }

  strong {
    margin-left: 1rem;
    color: ${({ theme }) => theme.colors.point};
  }
`

export const PostCommentItemComment = styled.p`
  width: 100%;

  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  word-break: break-all;
  white-space: pre-wrap;

  color: ${({ theme }) => theme.colors.white};
`

export const PostCommentItemActions = styled.div`
  width: 4rem;
  height: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
`

export const PostCommentItemButton = styled.button`
  svg {
    font-size: 2rem;

    color: ${({ theme }) => theme.colors.point};

    transition: opacity ${({ theme }) => theme.transition.normal};
    &:hover {
      opacity: ${({ theme }) => theme.opacity.normal};
    }
  }
`
