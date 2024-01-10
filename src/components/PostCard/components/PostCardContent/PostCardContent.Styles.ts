import styled from "styled-components"

export const PostCardContentLayout = styled.div`
  width: 70%;
  height: 18%;
  margin-top: 3%;
  margin-left: 15%;
  padding: 3%;

  border-radius: ${({ theme }) => theme.radius.size8};
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.4);

  font-size: ${({ theme }) => theme.fontSizes.semiLarge};

  user-select: none;
`

export const PostCardContentText = styled.h6<{
  $textPercent?: "60%" | "80%" | "100%"
}>`
  height: 100%;
  width: 100%;

  display: flex;

  line-height: 1.4;
  letter-spacing: 0.4px;
  font-size: ${({ $textPercent }) => $textPercent};
  white-space: pre-wrap;

  overflow-y: scroll;
  ${({ theme }) => theme.scrollBarNone}
`
