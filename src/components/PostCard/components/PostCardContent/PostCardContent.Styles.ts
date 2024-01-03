import styled from "styled-components"

export const PostCardContentLayout = styled.div`
  width: 70%;
  height: 18%;
  margin-top: 3%;
  margin-left: 15%;
  padding: 4%;

  border-radius: ${({ theme }) => theme.radius.size8};
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.4);

  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  text-align: center;

  user-select: none;
`

export const PostCardContentText = styled.h4<{ $textPercentage?: string }>`
  height: 100%;
  width: 100%;

  display: flex;

  text-align: center;
  line-height: 1.4;
  letter-spacing: 0.4px;
  font-size: ${({ $textPercentage }) =>
    $textPercentage ? $textPercentage : "100%"};

  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`
