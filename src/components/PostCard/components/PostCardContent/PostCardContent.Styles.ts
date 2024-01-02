import styled from "styled-components"

export const PostCardContentLayout = styled.div`
  width: 70%;
  height: 18%;
  margin-top: 3%;
  margin-left: 15%;
  padding: 2%;

  border-radius: ${({ theme }) => theme.radius.size8};
  background-color: ${({ theme }) => theme.colors.white};

  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-align: center;
`

export const PostCardContentText = styled.h4<{ $textPercentage?: string }>`
  height: 100%;
  width: 100%;

  display: flex;

  text-align: center;
  line-height: 1.4;
  font-size: ${({ $textPercentage }) =>
    $textPercentage ? $textPercentage : "100%"};

  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`
