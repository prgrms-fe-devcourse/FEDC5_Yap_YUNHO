import styled from "styled-components"

export const ServiceInfoLayout = styled.div`
  width: 100%;
  height: 100%;
  @media screen and (min-width: 900px) {
    border-right: 0.1rem solid black;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ServiceInfoContainer = styled.div`
  display: flex;
  width: 50rem;
  height: 50rem;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ServiceTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
`

export const ServiceInfoText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-align: center;
  line-height: 1.4;
`
export const Strong = styled.strong`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.point};
`
