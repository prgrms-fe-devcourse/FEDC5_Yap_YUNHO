import styled from "styled-components"

export const PostCardContentLayout = styled.div`
  width: 70%;
  height: 18%;
  margin-top: 3%;
  margin-left: 15%;
  padding: 10%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.4rem;
  text-align: center;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.white};
`

export const PostCardContentText = styled.h4<{ $textPercentage?: string }>`
  font-size: ${({ $textPercentage }) =>
    $textPercentage ? $textPercentage : "100%"};
  border: 1px solid red;
`
