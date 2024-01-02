import styled from "styled-components"

export const CategoryBarLayout = styled.div`
  width: 100%;
  height: 30%;
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

  /* 이후 변수 관리 */
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
`

export const CategoryBarListItem = styled.li<{ $isSelect: boolean }>`
  height: 3.2rem;
  padding: 0 1rem;
  margin: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  /* 이후 변수 관리 */
  background-color: ${(props) => (props.$isSelect ? "#fff" : "#e9e9e9")};
  border-radius: 8px;

  user-select: none;
  cursor: pointer;
`
