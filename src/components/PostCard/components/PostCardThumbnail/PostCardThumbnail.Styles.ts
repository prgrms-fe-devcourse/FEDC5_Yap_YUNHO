import styled from "styled-components"

export const PostCardThumbnailLayout = styled.div`
  width: 90%;
  height: 38%;
  margin-top: 3%;
  margin-left: 5%;

  user-select: none;
`

export const PostCardThumbnailImg = styled.img<{ $isCursor: boolean }>`
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.4);
  border-radius: 8px;

  object-fit: cover;
  cursor: ${({ $isCursor }) => ($isCursor ? "pointer" : "")};
`
