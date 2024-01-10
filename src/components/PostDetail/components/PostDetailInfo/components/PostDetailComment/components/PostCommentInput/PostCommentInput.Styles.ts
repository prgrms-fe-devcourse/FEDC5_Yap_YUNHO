import styled from "styled-components"

export const PostCommentInputLayout = styled.div`
  width: 100%;
  height: 6rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  user-select: none;
`

export const PostCommentAuthUserProfile = styled.div<{
  $authUserImage: string
}>`
  width: 6rem;
  height: 6rem;

  background-image: url(${({ $authUserImage }) => $authUserImage});
  background-color: ${({ theme }) => theme.colors.sub_alt};
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.radius.circle};
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5);
`

export const PostCommentInputContainer = styled.form`
  flex-grow: 1;
  height: 4rem;

  display: flex;

  border-radius: 2rem;
`

export const PostCommentInput = styled.input`
  flex-grow: 1;
  height: 100%;
  padding: 0 2rem;

  border-bottom-left-radius: 2rem;
  border-top-left-radius: 2rem;

  font-size: ${({ theme }) => theme.fontSizes.large};
`

export const PostCommentButton = styled.button`
  height: 100%;
  width: 6rem;
  padding-right: 1rem;

  background-color: ${({ theme }) => theme.colors.point};
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5);
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;

  transition: opacity ${({ theme }) => theme.transition.normal};

  svg {
    font-size: 2.4rem;

    pointer-events: none;
    transition: all ${({ theme }) => theme.transition.normal};
  }

  &:hover {
    opacity: ${({ theme }) => theme.opacity.normal};

    svg {
      transform: rotate(15deg);
    }
  }
`
