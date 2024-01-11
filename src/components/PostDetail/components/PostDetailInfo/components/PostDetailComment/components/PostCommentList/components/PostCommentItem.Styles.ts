import styled from "styled-components"

export const PostCommentItemLayout = styled.div`
  width: 100%;
  min-height: 6rem;

  display: flex;
  gap: 1rem;

  overflow-y: auto;
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
  flex-grow: 1;
  border: 1px solid red;
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
