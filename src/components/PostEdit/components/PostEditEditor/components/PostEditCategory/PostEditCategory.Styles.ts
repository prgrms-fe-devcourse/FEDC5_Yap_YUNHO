import styled from "styled-components"

export const PostEditCategoryLayout = styled.div`
  width: 40rem;
`

export const PostEditCategoryTitle = styled.h6`
  width: 82%;
  height: 4rem;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fontSizes.large};
`

export const PostEditCategoryList = styled.ul`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem 1rem;

  font-size: ${({ theme }) => theme.fontSizes.large};
`

export const PostEditCategoryItem = styled.li<{ $isSelect: boolean }>`
  padding: 1rem 1.2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, $isSelect }) =>
    $isSelect ? theme.colors.point_alt : theme.colors.point};
  border-radius: ${({ theme }) => theme.radius.size8};

  white-space: nowrap;

  user-select: none;
  cursor: pointer;

  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.5);
`
