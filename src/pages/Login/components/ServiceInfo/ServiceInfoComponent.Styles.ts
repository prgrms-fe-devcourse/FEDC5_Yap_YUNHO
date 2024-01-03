import styled from "styled-components"

export const ServiceInfoLayout = styled.div`
  min-width: 50%;
  height: 100%;
  border-right: 0.1rem solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ServiceInfoContainer = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
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
