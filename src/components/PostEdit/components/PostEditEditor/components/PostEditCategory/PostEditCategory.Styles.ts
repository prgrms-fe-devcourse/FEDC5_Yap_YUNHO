import { CategoryBarList } from "@/components/CategoryList/CategoryList.Styles"
import styled from "styled-components"

export const PostEditCategoryLayout = styled.div`
  width: 40rem;

  user-select: none;
`

export const PostEditCategoryTitle = styled.h6`
  width: 82%;
  height: 4rem;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fontSizes.large};
`

export const PostEditCategoryList = styled(CategoryBarList)`
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
`
