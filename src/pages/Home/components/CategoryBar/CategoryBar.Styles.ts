import styled from "styled-components"

export const CategoryBarLayout = styled.div`
  width: 100%;
  height: 20%;
  min-height: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CategoryBarList = styled.ul`
  width: 100%;
  height: 6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme.fontSizes.large};
`

export const CategoryBarListItem = styled.li<{ $isSelect: boolean }>`
  padding: 1rem 1.2rem;
  margin: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, $isSelect }) =>
    $isSelect ? theme.colors.point_alt : theme.colors.point};
  border-radius: ${({ theme }) => theme.radius.size8};

  user-select: none;
  cursor: pointer;

  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.5);
`
