import styled from "styled-components"

export const PostEditButtonLayout = styled.div`
  width: 40rem;
  height: 8rem;

  display: flex;
  justify-content: flex-end;
`

export const PostEditButton = styled.button`
  width: 10rem;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.point};
  border-radius: ${({ theme }) => theme.radius.size8};
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.5);

  font-size: ${({ theme }) => theme.fontSizes.large};

  transition: all 0.3s;
  user-select: none;
  &:hover {
    background-color: ${({ theme }) => theme.colors.point_alt};
  }
`
