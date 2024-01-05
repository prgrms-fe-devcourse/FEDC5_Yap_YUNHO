import styled from "styled-components"

export const SmallModalBackground = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;

  z-index: ${({ theme }) => theme.zIndex.smallModalBackground};
  background-color: rgba(0, 0, 0, 0.5);
`

export const SmallModalSection = styled.section`
  width: 44rem;
  height: 44rem;
  padding: 2rem;

  background-color: ${({ theme }) => theme.colors.sub};
  border-radius: ${({ theme }) => theme.radius.size12};
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
`

export const SmallModalContent = styled.div`
  width: 40rem;
  height: 40rem;

  background-color: ${({ theme }) => theme.colors.sub_alt};
  border-radius: ${({ theme }) => theme.radius.size12};
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.2);
`
