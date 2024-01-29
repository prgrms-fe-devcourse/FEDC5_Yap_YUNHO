import styled from "styled-components"

export const MessageProfileContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.8rem;
  height: 4.8rem;
`

export const MessageProfileImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: ${({ theme }) => theme.radius.circle};
`

export const SeenIndicator = styled.img`
  position: absolute;
  top: 2.7rem;
  right: 0;
`
