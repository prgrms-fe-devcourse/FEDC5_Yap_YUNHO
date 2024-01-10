import styled from "styled-components"
import { PostModalGlobalContainer } from "../Modal/ModalGlobal.Styles"

export const PostDetailInfoContainer = styled(PostModalGlobalContainer)`
  margin-top: 4rem;
`

export const PostDetailBoundary = styled.div`
  height: 63rem;
  width: 4rem;

  @media (max-width: 1000px) {
    display: none;
  }
`
