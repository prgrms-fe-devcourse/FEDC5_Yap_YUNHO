import styled from "styled-components"

export const PostCardContentLayout = styled.div`
  width: 70%;
  height: 18%;
  margin-top: 3%;
  margin-left: 15%;
  padding: 2%;

  border-radius: ${({ theme }) => theme.radius.size8};
  background-color: rgba(255, 255, 255, 0.7);

  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  text-align: center;

  user-select: none;
`

export const PostCardContentText = styled.h4<{ $textPercentage?: string }>`
  height: 100%;
  width: 100%;

  display: flex;

  text-align: center;
  line-height: 1.2;
  font-size: ${({ $textPercentage }) =>
    $textPercentage ? $textPercentage : "100%"};

  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`
